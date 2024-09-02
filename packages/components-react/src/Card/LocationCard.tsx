import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '@dronten/components-css/card/index.scss';
import { IconButton } from '../Button';

export interface LocationCardProps {
  cardTitle: string;
  imageUrl: string;
  description: string;
  mapLink: string;
  street: string;
  zipCode: string;
  city: string;
}

export const LocationCard = forwardRef(
  (
    {
      cardTitle,
      imageUrl,
      description,
      mapLink,
      street,
      zipCode,
      city,
      ...restProps
    }: PropsWithChildren<LocationCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div ref={ref} className="dronten-location-card" {...restProps}>
        <img srcSet={imageUrl} className="dronten-location-card__image" />
        <div className="dronten-location-card__content">
          <h2>{cardTitle}</h2>
          <p>{description}</p>
          <div className="dronten-location-card__address">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Plan uw route op Google Maps naar ${cardTitle}, opent in een nieuw tabblad`}
            ></a>
            <IconButton iconName="map-marker-alt" />
            <address>
              <span className="sr-only">Adress: </span>
              <span>{street}</span> <br />
              {zipCode} {city}
            </address>
          </div>
        </div>
      </div>
    );
  },
);

LocationCard.displayName = 'LocationCard';
