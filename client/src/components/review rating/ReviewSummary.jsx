import React from 'react';
import AverageRating from './AverageRating.jsx';
import RatingBar from './RatingBar.jsx';
import { ratingBar, recommended } from './helper.js';

const ReviewSummary = ({ data }) => {
  let ratingCount = 0;
  let recommendCount = 0;

  let count = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  data.map((item) => {
    ratingCount += item.rating;
    recommendCount += item.recommend;
    count[item.rating] += 1;
  });

  let average = ratingBar(ratingCount, data.length);
  let recommend = recommended(recommendCount, data.length);

  return (
    <div>
      <AverageRating average={average} recommended={recommend} />
      <RatingBar starNum={5} count={count[5]} />
      <RatingBar starNum={4} count={count[4]} />
      <RatingBar starNum={3} count={count[3]} />
      <RatingBar starNum={2} count={count[2]} />
      <RatingBar starNum={1} count={count[1]} />
      <div style={{ paddingTop: '30px' }}></div>
    </div>
  );
};

export default ReviewSummary;
