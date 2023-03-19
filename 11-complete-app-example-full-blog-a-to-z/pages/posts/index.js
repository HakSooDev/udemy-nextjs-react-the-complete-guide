import AllPosts from "../../components/posts/all-posts";

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-nextjs-1",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs-2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs-3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-nextjs-4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR. ",
      date: "2022-02-10",
    },
  ];

  const posts = DUMMY_POSTS;

  return <AllPosts posts={posts} />;
}

export default AllPostsPage;
