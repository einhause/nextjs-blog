import AllPosts from '../../components/posts/all-posts';

const TEST_POSTS = [
  {
    title: 'Getting Started with NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
    date: '2021-08-03',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: 'Getting Started with NextJS2',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
    date: '2021-08-03',
    slug: 'getting-started-with-nextjs2',
  },
  {
    title: 'Getting Started with NextJS3',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
    date: '2021-08-03',
    slug: 'getting-started-with-nextjs3',
  },
  {
    title: 'Getting Started with NextJS4',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
    date: '2021-08-03',
    slug: 'getting-started-with-nextjs4',
  },
];

const PostsPage = () => {
  return <AllPosts posts={TEST_POSTS} />;
};

export default PostsPage;
