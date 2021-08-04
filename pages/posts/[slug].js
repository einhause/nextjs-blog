import PostContent from '../../components/posts/post-detail/post-content';
import { getPostsFiles, getPostData } from '../../utils/posts-util';
import Head from 'next/head';

const PostDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </>
  );
};

export function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  const slugObjs = slugs.map((slug) => ({
    params: { slug: slug },
  }));

  return {
    paths: slugObjs,
    fallback: false,
  };
}

export default PostDetailPage;
