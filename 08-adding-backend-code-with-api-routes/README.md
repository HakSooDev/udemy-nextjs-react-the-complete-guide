## Section 8: Adding Backend Code with API Routes (Fullstack React)

Learned Next JS API Routes

### Next JS API routes

If I need backend functionality that should be triggered through client side code, it will be great to use Next JS api routes.
As I can injext API routes through Next JS, it allows me to build an extra API backend without having to build a totally different repo or project.  
However, note that calling an internal API route inside getStaticProps and getServerSideProps does not work. 
Instead, I can safely use API logic direcrtly inside them. 
