// import React from 'react';
// import { Link } from 'react-router-dom';

// const postsData = require('../data/posts/_posts.json');

// export default function Blog() {
//   const posts = postsData.map((post) => (
//     <Link to={`/post/${post.slug}`} key={post.slug}>
//       <div className="post-listing">
//         <h1>{post.title}</h1>
//       </div>
//     </Link>));

//   return <div className="blog">{posts}</div>;
// }

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
// import Content from '!babel-loader!@mdx-js/loader!../data/posts/mypost.mdx';

// import React from 'react';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import Post from '../components/Blog/MiniPost';

// export const sortByDate = (a, b) => {
//   return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
// };

// export default function Home({ posts }) {
//   return (
//     <div>
//       <title>Dev Blog</title>
//       <div className="posts">
//         {posts.map((post, index) => (
//           <Post key={index} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export async function getStaticProps() {
//   // Get files from the posts dir
//   const files = fs.readdirSync(path.join('posts'));

//   // Get slug and frontmatter from posts
//   const posts = files.map((filename) => {
//     // Create slug
//     const slug = filename.replace('.md', '');

//     // Get frontmatter
//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8',
//     );

//     const { data: frontmatter } = matter(markdownWithMeta);

//     return {
//       slug,
//       frontmatter,
//     };
//   });

//   return {
//     props: {
//       posts: posts.sort(sortByDate),
//     },
//   };
}
