import { useEffect, useRef } from 'react';
import leaflet, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationType, PlaceOfferType } from '../../types';
import useMap from '../hooks/use-map';
import { MapIcon } from '../../constants';

type MapProps = {
  locationCity: LocationType;
  offers: PlaceOfferType[];
  activeOffer: string;
}

const CitiesMap = ({locationCity, offers, activeOffer}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationCity);

  const defaultCustomIcon = new Icon(MapIcon.DEFAULT);

  const currentCustomIcon = new Icon(MapIcon.CURRENT);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon,
        })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section className="cities__map map" style={{ height: '100%' }} ref={mapRef} />
  );
};

export default CitiesMap;
