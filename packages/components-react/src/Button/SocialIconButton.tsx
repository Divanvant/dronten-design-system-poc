import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '@dronten/components-css/button/index.scss'

type SocialIconButtonProps = {
  link: string
  iconName: string
}

export const SocialIconButton = forwardRef(
  ({ link, iconName }: SocialIconButtonProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <a ref={ref} href={link} target="_blank" rel="noreferrer">
        <i className={clsx('dronten-social-icon', `fab fa-${iconName}`)}></i>
        <span className="sr-only">{iconName.split('-')[0]} van Gemeente Dronten, opent in nieuw tabblad</span>
      </a>
    )
  }
)

SocialIconButton.displayName = 'SocialIconButton'
