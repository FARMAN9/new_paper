import React from 'react';

const Card = ({ article }) => {
  return (
    <div className='card'>
      {article.image && (
        <img src={article.image} alt={article.title} />
      )}
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <p>{article.content}</p>
      <p>Published at: {new Date(article.publishedAt).toLocaleString()}</p>
      <p>Source: <a href={article.source.url} target="_blank" rel="noopener noreferrer">{article.source.name}</a></p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </div>
  );
}

export default Card;


