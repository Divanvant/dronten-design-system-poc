import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import '@dronten/components-css/card/index.scss';

export interface NieuwsCardProps {
  imageUrl: string;
  linkUrl: string;
  title: string;
  description?: string;
  dateTime: string;
  className: string;
}

export const NieuwsCard = forwardRef(
  (
    { imageUrl, linkUrl, title, description, dateTime, className, ...restProps }: PropsWithChildren<NieuwsCardProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <>
        <div ref={ref} className={clsx('dronten-nieuws-card', className)} {...restProps}>
          <div className="dronten-nieuws-card__image">
            <img srcSet={imageUrl} alt="" />
          </div>

          <div className="dronten-nieuws-card__content">
            <h3 className="dronten-nieuws-card__title">
              <a href={linkUrl}>{title}</a>
            </h3>

            <time dateTime={Math.floor(new Date(dateTime).getTime() / 1000).toString()}>
              <i className="fal fa-clock"></i>
              {dateTime}
            </time>

            {description && <div className="dronten-nieuws-card__excerpt">{description}</div>}

            <a className="dronten-nieuws-card__button" href={linkUrl} tabIndex={-1}>
              Lees meer
              <i className="fa fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </>
    );
  },
);

NieuwsCard.displayName = 'NieuwsCard';
