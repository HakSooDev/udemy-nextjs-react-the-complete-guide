## Section 6: Project Time: Page Pre-rendering & Data Fetching

Practiced making SSG, ISG, SSR and CSR pages.

- Homepage (ISG)
  - 
  It is important landing page. SEO must be good. However, it should be updated with the latest data in certain frequency. 

- All Events Page (ISG)
  - 
  Similar with Homepage
  
- Event Detail Page (ISG)
  - 
   dynamic page with ISG. 
   Since there could be many events, it is not a good idea to make all pregenerated event pages. (In my case, I only made pregenerated pages with featured
   events which will be most likely to be visited). Unfeatured event page will be pregenerated as request.
   
- Filtered Events Page (SSR or CSR)
  - 
  It is not easy to build all of pages with all the possible combinations of filter cases.
  Also, SEO is not very important for filtering feature. It is good idea to use SSR. 
  However, note that CSR can be used for this page as well. 
