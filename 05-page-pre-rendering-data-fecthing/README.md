## Section 5: Page Pre-Rendering & Data Fetching

### Pre-Rendering 

Next.js generates HTML for each page in advance (instead of having it all done by client-side)  <br />
It improves performace and SEO every page.

![Untitled](https://user-images.githubusercontent.com/76464363/222906781-d9ddfd4e-bfe9-4c03-ba2b-c89d04040923.png)

#### Static Site Generation  (SSG)
1. Pre-generate a page (with data prepared on the server-side) during build time <br />
2. Pages are prepared ahead to time and can be cached by the server /CDN serving the app <br />

This is done with `getStaticProps` 

#### Incremental Static Generation (ISG)
1. Re-generate pre-rendered page on every request, at most every X seconds
2. Static page is not just made in build time but also during revalidation
3. It helps to retain the benefits of static while scaling to millions of pages
- Serve “old” page if re-generation is not needed yet
- Generate, store and sever “new” page otherwise 

This is done with `getStaticPaths` 

#### Server-side Rendering (SSR)
1. Pre-render happens upon every request.
2. Good when you need access to the request object (e.g. for cookies)
