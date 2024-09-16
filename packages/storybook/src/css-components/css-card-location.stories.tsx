/* @license CC0-1.0 */

import readme from '@dronten/components-css/card/README.md?raw'
import '@dronten/components-css/card/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'

const LocationCard = ({
  cardTitle,
  imageUrl,
  description,
  mapLink,
  street,
  zipCode,
  city
}: PropsWithChildren<{
  cardTitle: string
  imageUrl: string
  description: string
  mapLink: string
  street: string
  zipCode: string
  city: string
}>) => (
  <div className="dronten-location-card">
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
        <i className="dronten-icon-button fas fa-map-marker-alt"></i>
        <address>
          <span className="sr-only">Adress: </span>
          <span>{street}</span> <br />
          {zipCode} {city}
        </address>
      </div>
    </div>
  </div>
)

const meta = {
  title: 'CSS Component/Cards/Location Card',
  id: 'css-location-card',
  component: LocationCard,
  argTypes: {
    cardTitle: {
      name: 'Card title',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    description: {
      name: 'Card description',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: ''
    },
    imageUrl: {
      name: 'Card image',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    mapLink: {
      name: 'Card mapLink',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    street: {
      name: 'Card street',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    zipCode: {
      name: 'Card zipCode',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    city: {
      name: 'Card city',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    }
  },
  args: {
    cardTitle: 'Gemeentehuis',
    imageUrl:
      'https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-1024x768.jpg 1024w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-300x225.jpg 300w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-768x576.jpg 768w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-1536x1152.jpg 1536w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-2048x1536.jpg 2048w',
    description: 'Gemeentehuis gemeente Dronten',
    mapLink: '',
    street: 'De Rede 1',
    zipCode: '8251 ER',
    city: 'Dronten'
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  }
} satisfies Meta<typeof LocationCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Dronten card'
}
