import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

const starCount = 180;

function createStars(width: number, height: number): Star[] {
  return Array.from({ length: starCount }, (_, index) => {
    const seed = Math.sin(index * 999.13) * 43758.5453;
    const random = seed - Math.floor(seed);
    const secondSeed = Math.sin((index + 71) * 481.37) * 15731.743;
    const secondRandom = secondSeed - Math.floor(secondSeed);

    return {
      x: random * width,
      y: secondRandom * height,
      radius: 0.45 + (index % 4) * 0.28,
      alpha: 0.16 + (index % 5) * 0.08,
    };
  });
}

export function CosmicScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frame = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let pointer = {
      x: 0.5,
      y: 0.42,
      visible: false,
    };

    const draw = () => {
      frame = 0;
      context.clearRect(0, 0, width, height);

      for (const star of stars) {
        context.beginPath();
        context.fillStyle = `rgba(220, 235, 255, ${star.alpha})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      }

      if (!motionQuery.matches && pointer.visible) {
        const x = pointer.x * width;
        const y = pointer.y * height;
        const haloRadius = 240;
        const halo = context.createRadialGradient(x, y, 0, x, y, haloRadius);
        halo.addColorStop(0, "rgba(255, 197, 82, 0.32)");
        halo.addColorStop(0.32, "rgba(100, 194, 255, 0.16)");
        halo.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = halo;
        context.fillRect(x - haloRadius, y - haloRadius, haloRadius * 2, haloRadius * 2);

      }
    };

    const scheduleDraw = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(scale, 0, 0, scale, 0, 0);
      stars = createStars(width, height);
      scheduleDraw();
    };

    const movePointer = (event: PointerEvent) => {
      const nextX = event.clientX / Math.max(width, 1);
      const nextY = event.clientY / Math.max(height, 1);
      pointer = {
        x: nextX,
        y: nextY,
        visible: true,
      };
      document.documentElement.style.setProperty("--cosmic-x", (pointer.x - 0.5).toFixed(3));
      document.documentElement.style.setProperty("--cosmic-y", (pointer.y - 0.5).toFixed(3));
      scheduleDraw();
    };

    const hidePointer = () => {
      pointer.visible = false;
      document.documentElement.style.setProperty("--cosmic-x", "0");
      document.documentElement.style.setProperty("--cosmic-y", "0");
      scheduleDraw();
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", movePointer, { passive: true });
    window.addEventListener("pointerleave", hidePointer);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerleave", hidePointer);
      document.documentElement.style.setProperty("--cosmic-x", "0");
      document.documentElement.style.setProperty("--cosmic-y", "0");
    };
  }, []);

  return (
    <div className="cosmic-scene" aria-hidden="true">
      <canvas ref={canvasRef} className="cosmic-canvas" />
      <div className="cosmic-aurora" />
    </div>
  );
}
