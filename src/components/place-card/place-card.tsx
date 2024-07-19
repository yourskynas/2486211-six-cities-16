type PlaceOffersProps = {
  title: string;
  typeOfHousing: string;
  previewImage: string;
  price: number;
  isFavorite: boolean;
  classNameCard: string;
  imageWidth: string;
  imageHeight: string;
}

const PlaceCard = ({title, typeOfHousing, previewImage, price, isFavorite, classNameCard, imageWidth, imageHeight}: PlaceOffersProps): JSX.Element => {
  const favoriteClass = isFavorite
    ? 'place-card__bookmark-button place-card__bookmark-button--active button'
    : 'place-card__bookmark-button button';

  const PlaceCardStyle = {
    FOR_ARTICLE: `${classNameCard }__card place-card`,
    FOR_DIV: `${classNameCard }__image-wrapper place-card__image-wrapper`
  };

  return (
    <article className={PlaceCardStyle.FOR_ARTICLE}>
      <div className={PlaceCardStyle.FOR_DIV}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imageWidth} height={imageHeight} alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref ="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{typeOfHousing}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
