import clsx from 'clsx'
import { ForwardedRef, forwardRef } from 'react'
import '@dronten/components-css/button/index.scss'

type IconButtonProps = {
  iconName: string
}

export const IconButton = forwardRef(({ iconName }: IconButtonProps, ref: ForwardedRef<HTMLElement>) => {
  return <i ref={ref} className={clsx('dronten-icon-button', `fas fa-${iconName}`)}></i>
})

IconButton.displayName = 'IconButton'
