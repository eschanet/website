import React from 'react';
import { useParams } from 'react-router-dom';

const postsData = require('../data/posts/_posts.json');

function findPostBySlug(slug) {
  return postsData.find((o) => o.slug === slug);
}

export default function Post() {
  const { slug } = useParams();
  const post = findPostBySlug(slug);

  return (
    <div className="post-content-view">
      <h1 className="title">{post.title}</h1>
      <content>{post.content}</content>
    </div>
  );
}
