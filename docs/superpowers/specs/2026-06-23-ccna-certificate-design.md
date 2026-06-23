# CCNA Certificate Portfolio Addition

## Goal

Add the provided Cisco Networking Academy certificate to the existing portfolio
without removing the current Google Analytics certificate. Publish the finished
change through the repository's existing GitHub Pages workflow.

## Confirmed certificate facts

- Title: CCNA: Introduction to Networks
- Recipient: qiren ong
- Provider: Multimedia University - Melaka Campus through Cisco Networking Academy
- Completion date: 17 Feb 2026
- The supplied certificate has no expiry date, credential ID, or verification URL.

## Design

1. Render the one-page supplied PDF as a PNG under `public/assets/site/` for a
   crisp in-page preview, while keeping the original PDF alongside it for the
   source document.
2. Extend the certification data model so each certificate supplies its own
   image and optional expiry date.
3. Refactor the Certification section to render one responsive card per
   certificate, preserving the current visual style and Google Analytics entry.
4. Show `Not specified` for absent expiry dates rather than inventing a value.
5. Run the existing tests and production build. Stage only the CCNA asset,
   certification code, and this specification; leave unrelated untracked assets
   untouched.
6. Push `main`. The existing GitHub Actions workflow builds and deploys the
   website to GitHub Pages automatically.

## Error handling and verification

- Image paths use the existing `assetUrl` helper, so they work under the
  `/Qiren-web/` GitHub Pages base path.
- The image description names the exact certificate and recipient for accessible
  fallback text.
- Verify the rendered certificate preview locally, run `npm test` and
  `npm run build`, then verify the public GitHub Pages site after deployment.
