import { FormEvent, useState } from 'react';
import { CommentLengthLimit } from '../../constants';
import OfferRating from './offer-rating';
import { sendComment } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectIsOffersDataLoading } from '../../store/selectors';

type ReviewFormProps = {
  offerId: string;
}

type Submit = {
  disabledStatus: boolean;
}

const Submit = ({disabledStatus}: Submit): JSX.Element => {
  const isOffersDataLoading = useAppSelector(selectIsOffersDataLoading);
  return (
    <button className="reviews__submit form__submit button" type="submit" disabled={!disabledStatus || isOffersDataLoading}>Submit</button>
  );
};

const ReviewForm = ({offerId}: ReviewFormProps): JSX.Element => {
  const [valueTextarea, setTextarea] = useState('');
  const [valueRating, setRating] = useState(0);

  const dispatch = useAppDispatch();

  const validTextarea = valueTextarea.length > CommentLengthLimit.MIN && valueTextarea.length < CommentLengthLimit.MAX;
  const validRating = valueRating !== 0;
  const disabledStatus = validTextarea && validRating;

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
      dispatch(sendComment({
        id: offerId,
        comment: valueTextarea,
        rating: valueRating
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
