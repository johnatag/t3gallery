# T3 Gallery

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic ui with mock data
- [x] Tiddy up build process
- [x] Actually set up a database (vercel postgres)
- [x] Attach database to UI
- [ ] Add authentification (w/ clerk)
- [ ] Add image upload
- [ ] Error management (w/ Sentry)
- [ ] Routing/Image page (parallel route)
- [ ] Delete button (w/ Server Actions)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

## Notes

- The extra requirement of using the same deps version as theo in his video presented a significant challenge since:
    - Ever since the publishing of the video, new releases of these deps have been published along with breaking changes
    - My lack of experience using this stack in general made the debugging process a lot lenghtier
    - Google Fonts not loading for some reason...
    - To fix this, I essentially just recreated the same stuff as theo had manually by checking his first initial commit on Github

- Dynamic Routes:
    - Next.js's Default Rendering Strategy: Next.js aims for optimal performance by default. Its default rendering strategy in the App Router is Static Rendering. This means:
    At build time: Next.js tries to pre-render your pages into static HTML files. Benefits: These static files can be served incredibly fast from a CDN (Content Delivery Network), leading to great performance and SEO. When it works best: For content that doesn't change frequently or isn't specific to a user (e.g., a blog post, a static "About Us" page).
    - force-dynamic: Purpose: It's an explicit, top-level declaration that tells Next.js: "This entire route segment (and everything nested within it that doesn't explicitly opt out) must be rendered dynamically on the server for every request."
    - headers(): Calling headers() will opt out of the Full Route Cache for that segment. This means the page will be dynamically rendered on the server at request time. However, it does not automatically set cache: 'no-store' for all fetch requests like force-dynamic does. You'd still need to explicitly configure fetch caching if you want fresh data.
    - cookies(): similar to headers() -> difference lies in usage between header vs cookie
    - 


