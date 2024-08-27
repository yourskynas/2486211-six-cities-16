import { RATINGS, RatingTitle } from '../../constants';
import { selectIsCommentPosting } from '../../store/offers-data/selectors';
import { useAppSelector } from '../hooks';

type RatingItemProps = {
  rating: 5 | 4 | 3 | 2 | 1;
} & RatingProps;

type RatingProps = {
  onRatingClick: (value: number) => void;
  valueRating: number;
}

const OfferRatingItem = ({rating, onRatingClick, valueRating}: RatingItemProps): JSX.Element => {
  const isCommentPosting = useAppSelector(selectIsCommentPosting);
  return (
    <><input className="form__rating-input visually-hidden" name="rating" value={valueRating} id={`${rating}-stars`} type="radio" onChange={() => onRatingClick(rating)} disabled={isCommentPosting} checked={valueRating === rating} />
      <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title={RatingTitle[rating]}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

const OfferRating = ({onRatingClick, valueRating}: RatingProps):JSX.Element => (
  <div className="reviews__rating-form form__rating">
    {RATINGS.map((rating) => <OfferRatingItem rating={rating} key={rating} onRatingClick={onRatingClick} valueRating={valueRating}/>)}
  </div>
);

export default OfferRating;
