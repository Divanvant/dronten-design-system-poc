import clsx from 'clsx'
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react'
import '@dronten/components-css/banner/index.scss'

export enum BannerType {
  info = 'info',
  warning = 'warning',
  error = 'error',
  success = 'success'
}

export interface BannerProps {
  title?: string
  imageUrl?: string
  description: string
  bannerType: BannerType
}

export const Banner = forwardRef(
  (
    { title, imageUrl, description, bannerType = BannerType.info, ...restProps }: PropsWithChildren<BannerProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={clsx('dronten-banner', `dronten-banner__${BannerType[bannerType]}`)} {...restProps}>
        {imageUrl && <img src={imageUrl} alt="" />}
        {title && title !== '' && <strong>{title}</strong>}
        {description}
      </div>
    )
  }
)

Banner.displayName = 'Banner'
