import React from 'react';
import { Link } from 'react-router-dom';

// import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const postsData = require('../data/posts/_posts.json');

export default function Blog() {
  const posts = postsData.map((post) => (
    <Link to={`/post/${post.slug}`} key={post.slug}>
      <div className="post-listing">
        <h1>{post.title}</h1>
      </div>
    </Link>));

  return <div className="blog">{posts}</div>;
}
