import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class BlogpostsList extends React.Component {
  render() {
    const firstName = "Fernando";
    const lastName = "Torres L";

    return (
      <div className="Blogpost">
        <img lassName="Blogpost__img" alt="Imagen"/>
				<h1>Cuadro rojo</h1>

				<div className="Blogpost__section-info">
					<div>
						<h3>Título blogpost</h3>
					</div>
					<article>Texto del blogpost</article>
				</div>
      </div>
    );
  }
}

export default BlogpostsList;
