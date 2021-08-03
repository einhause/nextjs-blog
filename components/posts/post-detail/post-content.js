import classes from './post-content.module.css';
import PostHeader from './post-header';

const TEST_POST = {
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2021-08-03',
  slug: 'getting-started-with-nextjs',
};

const PostContent = () => {
  const imagePath = `/images/posts/${TEST_POST.slug}/${TEST_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={TEST_POST.title} image={imagePath} />
      {TEST_POST.content}
    </article>
  );
};

export default PostContent;
