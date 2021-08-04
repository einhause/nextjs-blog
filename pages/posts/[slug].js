import PostContent from '../../components/posts/post-detail/post-content';
import { getPostsFiles, getPostData } from '../../utils/posts-util';

const PostDetailPage = (props) => {
  return <PostContent post={props.post} />;
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
