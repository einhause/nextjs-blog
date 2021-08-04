import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../utils/posts-util';

// const TEST_POSTS = [
//   {
//     title: 'Getting Started with NextJS',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
//     date: '2021-08-03',
//     slug: 'getting-started-with-nextjs',
//   },
//   {
//     title: 'Getting Started with NextJS2',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
//     date: '2021-08-03',
//     slug: 'getting-started-with-nextjs2',
//   },
//   {
//     title: 'Getting Started with NextJS3',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
//     date: '2021-08-03',
//     slug: 'getting-started-with-nextjs3',
//   },
//   {
//     title: 'Getting Started with NextJS4',
//     image: 'getting-started-nextjs.png',
//     excerpt:
//       'NextJS is the React framework for Production. It makes full-stack development a breeze with Static Generation and Server Side Rendering',
//     date: '2021-08-03',
//     slug: 'getting-started-with-nextjs4',
//   },
// ];

const HomePage = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}

export default HomePage;
