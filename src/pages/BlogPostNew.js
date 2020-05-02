/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import '../components/styles/BlogPostNew.css';
import imgArticle from '../../resources/imgs/aidan-hancock-455440.png';

class BlogPostNew extends React.Component {
  render() {
    const title = 'Search Engine Optimization And Advertising';
    const article =
      'There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun.';
    const category = 'TECHNOLOGY';

    return (
      <section className="BlogPostNew">
        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>

        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>

        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>

        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>

        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>

        <a className="BlogPostNew__post" href="/">
          <figure className="BlogPostNew__post-image">
            <img src={imgArticle} alt="Imagen" />
          </figure>
          <span className="BlogPostNew_cuadro-rojo">
            <p className="BlogPostNew__category">{category}</p>
          </span>
          <section className="BlogPostNew__section-info">
            <div className="BlogPostNew__title">
              <p>{title}</p>
            </div>
            <div className="BlogPostNew__article">
              <article>{article}</article>
            </div>
          </section>
        </a>
      </section>
    );
  }
}

export default BlogPostNew;
