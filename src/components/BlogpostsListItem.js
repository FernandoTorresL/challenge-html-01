import React from 'react';

import './styles/BlogPostNew.css';

const BlogpostsListItem = ({ imgUrl, category, title, article }) => {
  return (
    <section className="BlogPostNew">
      <a className="BlogPostNew__post" href="/">
        <figure className="BlogPostNew__post-image">
          <img src={imgUrl} alt="Imagen" />
        </figure>
        <span className="BlogPostNew_cuadro-rojo">
          <p className="BlogPostNew__category">{category}</p>
        </span>
        <section className="BlogPostNew__section-info">
          <div className="BlogPostNew__title">
            <p>{title}</p>
          </div>
          <div className="BlogPostNew__article">
            <article>
              There is a lot of exciting stuff going on in the starts above us
              that make astronomy so much fun.
            </article>
          </div>
        </section>
      </a>
    </section>
  );
};

export default BlogpostsListItem;
