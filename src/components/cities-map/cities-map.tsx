import { useEffect, useRef } from 'react';
import leaflet, { Icon, LayerGroup, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { LocationType, PlaceOfferType } from '../../types';
import useMap from '../hooks/use-map';
import { MapIcon } from '../../constants';

type MapProps = {
  locationCity: LocationType;
  offers: PlaceOfferType[] | null | undefined;
  activeOffer?: string | undefined;
  classNameMap: string;
}
const defaultCustomIcon = new Icon(MapIcon.Default);

const currentCustomIcon = new Icon(MapIcon.Current);

const CitiesMap = ({locationCity, offers, activeOffer, classNameMap}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locationCity);

  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([locationCity.latitude, locationCity.longitude], locationCity.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [locationCity, map]);

  useEffect(() => {
    if (map && offers) {
      markerLayer.current.clearLayers();
      offers.forEach((offer) => {
        leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: offer.id === activeOffer ? currentCustomIcon : defaultCustomIcon,
        })
          .addTo(markerLayer.current);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section className={`${classNameMap}__map map`} ref={mapRef} />
  );
};

export default CitiesMap;
