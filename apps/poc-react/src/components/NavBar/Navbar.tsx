'use client'

import logo from '@dronten/assets/src/logo.svg'
import { usePathname } from 'next/navigation'
import './index.css'

export const Navbar = () => {
  const pathName = usePathname()
  return (
    <>
      <div className="navbar" role="navigation" id="navbar">
        <div className="container">
          <div className="site-branding">
            <a href="/" aria-label="Gemeente Dronten">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="site-branding__svg" src={logo.src} alt="" aria-label="Logo Gemeente Dronten" />
            </a>
          </div>

          <nav aria-label="primaire navigatie" id="site-navigation">
            <div>
              <ul id="menu-hoofdmenu" className="navbar-nav">
                <li itemType="https://www.schema.org/SiteNavigationElement">
                  <a href="/" className={pathName === '/' ? 'active' : ''}>
                    Home
                  </a>
                </li>

                <li itemType="https://www.schema.org/SiteNavigationElement">
                  <a href="/nieuws" className={pathName === '/nieuws' ? 'active' : ''}>
                    Nieuws
                  </a>
                </li>

                <li itemType="https://www.schema.org/SiteNavigationElement">
                  <a href="/contact" className={pathName === '/contact' ? 'active' : ''}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
