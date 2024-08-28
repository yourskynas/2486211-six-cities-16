import { FormEvent, useState } from 'react';
import { CommentLengthLimit } from '../../constants';
import OfferRating from './offer-rating';
import { postComment } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectIsCommentPosting } from '../../store/offers-data/selectors';

type ReviewFormProps = {
  offerId: string;
}

type Submit = {
  isDisabled: boolean;
}

const Submit = ({isDisabled}: Submit): JSX.Element => {
  const isCommentPosting = useAppSelector(selectIsCommentPosting);
  return (
    <button className="reviews__submit form__submit button" type="submit" disabled={!isDisabled || isCommentPosting}>Submit</button>
  );
};

const ReviewForm = ({offerId}: ReviewFormProps): JSX.Element => {
  const [valueTextarea, setTextarea] = useState('');
  const [valueRating, setRating] = useState(0);

  const dispatch = useAppDispatch();
  const isCommentPosting = useAppSelector(selectIsCommentPosting);

  const validTextarea = valueTextarea.length > CommentLengthLimit.MIN && valueTextarea.length < CommentLengthLimit.MAX;
  const validRating = valueRating !== 0;
  const isDisabled = validTextarea && validRating && !isCommentPosting;

  const onRatingClick = (value: number) => {
    setRating(value);
  };

  const clearForm = () => {
    setTextarea('');
    setRating(0);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (validTextarea && validRating) {
      dispatch(postComment({
        id: offerId,
        comment: valueTextarea,
        rating: valueRating,
        date: '',
        user: {
          name: '',
          avatarUrl: '',
          isPro: false
        }
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            clearForm();
          }
        });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <OfferRating onRatingClick={onRatingClick} valueRating={valueRating} />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        required
        maxLength={CommentLengthLimit.MAX}
        value={valueTextarea}
        onChange={(e) => setTextarea(e.target.value)}
        disabled={isCommentPosting}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLengthLimit.MIN} characters</b>.
        </p>
        {<Submit isDisabled={isDisabled}/>}
      </div>
    </form>
  );
};

export default ReviewForm;
