import { nanoid } from '@reduxjs/toolkit';
import { ReviewType } from '../../types';
import { humanizingDate, ratingInProcent } from '../../utils';
import { useEffect } from 'react';

type ReviewsProps = {
  reviews: ReviewType[];
}

type ReviewItem = {
  review: ReviewType;
}

const ReviewItem = ({review}: ReviewItem): JSX.Element => {
  const { date, user, comment, rating } = review;
  const ratingStars = ratingInProcent(rating);
  const formattedDate = humanizingDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingStars }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{formattedDate}</time>
      </div>
    </li>
  );
};

const Reviews = ({reviews}: ReviewsProps): JSX.Element => {
  useEffect (() => {
    // страница ломается, что не так с кодом..
    // if (reviews.length > 2) {
    //   reviews.sort((reviewA, reviewB) => new Date(reviewB.date).valueOf() - new Date(reviewA.date).valueOf());
    // }
  }, [reviews]);
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewItem key={nanoid()} review={review} />)}
      </ul>
    </>
  );
};

export default Reviews;
