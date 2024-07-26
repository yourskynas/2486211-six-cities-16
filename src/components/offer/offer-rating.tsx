const RATINGS = ['5', '4', '3', '2', '1'] as const;

type RatingItemProps = {
  rating: '5' | '4' | '3' | '2' | '1';
} & RatingProps;

type RatingProps = {
  onRating: (value: string) => void;
  valueRating: string;
}

const OfferRatingItem = ({rating, onRating, valueRating}: RatingItemProps): JSX.Element => (
  <><input className="form__rating-input visually-hidden" name="rating" value={valueRating} id={`${rating}-stars`} type="radio" onChange={() => onRating(rating)}/>
    <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

const OfferRating = ({onRating, valueRating}: RatingProps):JSX.Element => (
  <div className="reviews__rating-form form__rating">
    {RATINGS.map((rating) => <OfferRatingItem rating={rating} key={rating} onRating={onRating} valueRating={valueRating}/>)}
  </div>
);

export default OfferRating;
