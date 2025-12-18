import { PlaceOfferType } from '../../types';
import PlaceCard from '../place-card/place-card';

type NearPlacesProps = {
  placeOffers: PlaceOfferType[];
}

const NearPlaces = ({placeOffers}: NearPlacesProps): JSX.Element => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <div className="near-places__list places__list">
      {placeOffers.map((offer) => <PlaceCard key={offer.id} placeOffer={offer} classNameCard={'near-places'} imageWidth='260' imageHeight='200'/>)}
    </div>
  </section>
);

export default NearPlaces;
