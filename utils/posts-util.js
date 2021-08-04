import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // split markdown files by metadata and content

const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8'); //content of file as text
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);
  const allPostsSorted = postFiles
    .map((post) => getPostData(post))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
  return allPostsSorted;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
