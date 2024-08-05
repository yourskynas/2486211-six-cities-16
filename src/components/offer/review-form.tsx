import { useState } from 'react';
import { CommentLengthLimit } from '../../constants';
import OfferRating from './offer-rating';

type Submit = {
  disabledStatus: boolean;
}

const Submit = ({disabledStatus}: Submit): JSX.Element => (
  <button className="reviews__submit form__submit button" type="submit" disabled={!disabledStatus}>Submit</button>
);

const ReviewForm = (): JSX.Element => {
  const [valueTextarea, setTextarea] = useState('');
  const [valueRating, setRating] = useState('');

  const onRatingClick = (value: string) => {
    setRating(value);
  };

  const validTextarea = valueTextarea.length > CommentLengthLimit.MIN && valueTextarea.length < CommentLengthLimit.MAX;
  const validRating = valueRating !== '';

  const disabledStatus = validTextarea && validRating;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => evt.preventDefault()}>
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
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{CommentLengthLimit.MIN} characters</b>.
        </p>
        {<Submit disabledStatus={disabledStatus}/>}
      </div>
    </form>
  );
};

export default ReviewForm;
