/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import BlogpostsListItem from '../components/BlogpostsListItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './styles/BlogPosts.css';

const Home = () => {
  const initialState = {
    data: [
      {
        id: '33a2-4512-9ac1-354ad7bec5e9',
        imgUrl: '../../resources/imgs/dose-media-344938.png',
        category: 'TECHNOLOGY',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed3d',
        imgUrl: '../../resources/imgs/aidan-hancock-455440.png',
        category: 'ENTERTAINMENT',
        title: 'Search Engine Optimization And Advertising',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed3e',
        imgUrl: '../../resources/imgs/crew-22235.png',
        category: 'FINANCE',
        title: 'Writing A Good Headline For Your Advertisement',
      },
      {
        id: '33a2-4512-9ac1-354ad7bec5e1',
        imgUrl: '../../resources/imgs/annie-spratt-213059.png',
        category: 'TECHNOLOGY',
        title:
          '6 Powerful Tips To Creating Testimonials That Sell Your Products Fast',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed32',
        imgUrl: '../../resources/imgs/jeff-sheldon-264920.png',
        category: 'ENTERTAINMENT',
        title: '15 Tips To Increase Your Adwords Profits',
      },
      {
        id: '33a2-4512-9ac1-354ad7bec5e0',
        imgUrl: '../../resources/imgs/dose-media-344938.png',
        category: 'TECHNOLOGY',
        title: 'Using Banner Stands To Increase Trade Show Traffic',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed26',
        imgUrl: '../../resources/imgs/jeff-sheldon-264920.png',
        category: 'ENTERTAINMENT',
        title: '15 Tips To Increase Your Adwords Profits',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed3e',
        imgUrl: '../../resources/imgs/crew-22235.png',
        category: 'FINANCE',
        title: 'Writing A Good Headline For Your Advertisement',
      },
      {
        id: '101a-44ca-b6c2-0be075aeed5f',
        imgUrl: '../../resources/imgs/aidan-hancock-455440.png',
        category: 'ENTERTAINMENT',
        title: 'Search Engine Optimization And Advertising',
      },
    ],
  };

  const [state] = useState(initialState);

  return (
    <>
      <Header />
      <div className="Home">
        <div className="BlogPosts__container">
          {state.data.map(blogposts => {
            return <BlogpostsListItem key={blogposts.id} {...blogposts} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
