import { useRef, useState, useEffect } from 'react';
import leaflet, { Map } from 'leaflet';
import { LocationType } from '../../types';
import { TileLayer } from '../../constants';

const useMap = (mapRef: React.RefObject<HTMLElement | null>, locationCity: LocationType): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: locationCity.latitude,
          lng: locationCity.longitude,
        },
        zoom: locationCity.zoom,
      });

      leaflet
        .tileLayer(TileLayer.URL, {
          attribution: TileLayer.ATTRIBUTION,
        },
        )
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, locationCity]);

  return map;
};

export default useMap;
