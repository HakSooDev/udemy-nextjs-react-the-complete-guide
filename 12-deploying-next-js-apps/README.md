## Section 12: Deploying NextJS Apps

Learned about deployment <br/>
Learned environment variables <br/>
Learned how to deploy to Vercel <br/>
Deployed the blog <br/>

https://udemy-nextjs-react-the-complete-guide-haksoodev.vercel.app/ <br/>

![image](https://user-images.githubusercontent.com/76464363/227778220-15c70ba4-94e7-4f94-8c34-4df1b7713d40.png)


## Deployment

### Two Deployment Options

#### 1. **Standard Build (next build)**

- Produces optimized production bundles and a SERVER-SIDE app
    - Note that this result requires NodeJS server while react app does not need this
    - This is why you cannot just take this output and put it on static host (not like React)
- Pages are pre-rendered (if possible) but NodeJS server is required for API routes, server-side pages and page revalidation
- Re-deploy needed if code changes or you do not use revalidation and need page updates

#### 2. Full Static Build **(next export)**

- Produces 100% static app (HTML, CSS, JS): NO NodeJS server required
    - deployment and hosting is easier because your host does not have to know NodeJS
- However, It does not support SERVER-SIDE feature
    - Does not work if your app uses API routes, server-side pages or wants to use page revalidation
- Re-deploy for all code and content changes

![Untitled](https://user-images.githubusercontent.com/76464363/227778298-ff6de2ab-0003-42aa-b66d-cdc8dae6be5a.png)

So if our app uses NextJS server side feature, we must go with option 1 since our host should be able to run NodeJS to support NextJS SERVER-SIDE feature.

However, if our app does not use it, option 2 may be good to use. 

### Deployment Steps & Considerations

1. Add page metadata, optimize code, remove unnecessary dependecies (Try to make app as small as possible)
2. Use environment variables for variable data (e.g. database credentials, API keys, …)
3. Do a test build and test the production-ready app locally or on some test server
4. Deploy!

## Environment variables
Environment variables are variables that used to provide different configures in different environments. <br/>
They are typically in .env file or configure file.<br/>
However, it is important to be aware of that these values can often cause security issue.<br/>
For example, if unauthorized people can view the file, it will cause security issue. <br/>
In this case, if environment variables can be accessed by unauthorized people, you must be able to rule out such as managing accessing IP address.<br/>
Also, using hosting providers built-in environment variables will be good idea as well.<br/>