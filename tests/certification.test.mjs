import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("certification section renders the CCNA credential alongside existing credentials", async () => {
  const [dataSource, sectionSource] = await Promise.all([
    readFile(new URL("../src/data/certifications.ts", import.meta.url), "utf8"),
    readFile(new URL("../src/sections/Certification.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(dataSource, /image: string;/);
  assert.match(dataSource, /expiryDate\?: string;/);
  assert.match(dataSource, /title: "CCNA: Introduction to Networks"/);
  assert.match(dataSource, /name: "qiren ong"/);
  assert.match(dataSource, /issueDate: "February 17, 2026"/);
  assert.match(dataSource, /image: "\/assets\/site\/ccna-introduction-to-networks-certificate\.png"/);
  assert.match(dataSource, /certificateUrl: "\/assets\/site\/ccna-introduction-to-networks-certificate\.pdf"/);
  assert.match(sectionSource, /certifications\.map\(\(certification\) =>/);
  assert.match(sectionSource, /certification\.expiryDate \?\? "Not specified"/);
  assert.match(sectionSource, /assetUrl\(certification\.image\)/);

  await access(new URL("../public/assets/site/ccna-introduction-to-networks-certificate.png", import.meta.url));
  await access(new URL("../public/assets/site/ccna-introduction-to-networks-certificate.pdf", import.meta.url));
});
