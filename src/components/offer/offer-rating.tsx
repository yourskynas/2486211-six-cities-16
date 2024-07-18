const RATINGS = ['5', '4', '3', '2', '1'] as const;

type RatingProps = {
  rating: string;
}

const OfferRatingItem = ({rating}: RatingProps): JSX.Element => (
  <><input className="form__rating-input visually-hidden" name="rating" value={rating} id="{rating}-stars" type="radio" />
    <label htmlFor="{rating}-stars" className="reviews__rating-label form__rating-label" title="perfect">
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

const OfferRating = ():JSX.Element => (
  <div className="reviews__rating-form form__rating">
    {RATINGS.map((rating) => <OfferRatingItem rating={rating} key={rating}/>)}
  </div>
);

export default OfferRating;
