'use client'

import logo from '@dronten/assets/src/logo.svg'
import './index.css'
import { SocialIconButton } from '@dronten/components-react/src/index'

const socialLinks = [
  { link: 'https://twitter.com/volgdronten', iconName: 'x-twitter' },
  { link: 'https://www.instagram.com/gemeentedronten/', iconName: 'instagram' },
  { link: 'https://www.facebook.com/gemeentedronten/', iconName: 'facebook-f' },
  {
    link: 'https://www.linkedin.com/company/gemeente-dronten/',
    iconName: 'linkedin-in'
  },
  {
    link: 'https://www.youtube.com/channel/UCZrtdMAXqfQhvqPILWpOylg',
    iconName: 'youtube'
  }
]

export const Footer = () => (
  <>
    <footer className="footer">
      <div className="container">
        <div className="contact-links-wrapper">
          <div>
            <h2>Contact</h2>
            Contact links go here
          </div>

          <div>
            <h2>Snel naar</h2>
            <div>
              <p>
                <a href="https://www.dronten.nl/actueel/">Nieuws</a>
                <br />
                <a href="https://www.dronten.nl/bestuur-organisatie/">Bestuur &amp; Organisatie</a>
                <br />
                <a href="https://www.dronten.nl/contact/">Contact</a>
              </p>
            </div>
          </div>

          <div>
            <h2>Algemeen</h2>

            <div>
              <p>
                <a href="https://www.dronten.nl/wp-content/uploads/2024/06/Privacyverklaring-gemeente-Dronten_definitief-inclusief-Wpg-002.pdf">
                  Privacyverklaring
                </a>
                <br />
                <a href="https://www.dronten.nl/toegankelijkheidsverklaring/">Toegankelijkheidsverklaring</a>
                <br />
                <a href="https://www.dronten.nl/proclaimer/">Proclaimer</a>
              </p>
            </div>
          </div>
        </div>
        <div className="logo-wrapper">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.dronten.nl/wp-content/themes/theme-fusion/assets/img/skyline.svg" alt="" />
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} alt="Logo gemeente Dronten" />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {socialLinks.map(({ link, iconName }) => (
            <SocialIconButton key={iconName} link={link} iconName={iconName} />
          ))}
        </div>
      </div>
    </footer>
  </>
)
