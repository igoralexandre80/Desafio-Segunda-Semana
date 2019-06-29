import './Cards.css';
import React from 'react';

const Cards = ({ posts }) => (
    <div>
        {posts.map(post => (
            <div key={post.id} className="card">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
)

export default Cards;