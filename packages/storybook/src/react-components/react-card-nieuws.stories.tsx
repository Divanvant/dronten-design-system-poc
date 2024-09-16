import { NieuwsCard } from '@dronten/components-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Component/Cards/Nieuws Card',
  id: 'react-nieuws-card',
  component: NieuwsCard,
  argTypes: {
    imageUrl: {
      name: 'Card image',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    linkUrl: {
      name: 'Card link',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    title: {
      name: 'Card title',
      type: {
        name: 'string',
        required: false
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
    dateTime: {
      name: 'Card dateTime',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    }
  },
  args: {
    title: 'Meerpaaldagen 2024',
    description:
      'Op 8, 9 en 10 augustus 2024 wordt op het Meerpaalplein en in stadscentrum SuyderSee Dronten het welbekende evenement de Meerpaaldagen georganiseerd. Kijk hier voor meer informatie.',
    imageUrl:
      'https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-1024x683.jpg 1024w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-300x200.jpg 300w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-768x512.jpg 768w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-1536x1024.jpg 1536w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-2048x1365.jpg 2048w',
    linkUrl: 'https://www.dronten.nl/actueel/meerpaaldagen-2024/',
    dateTime: '5 augustus 2024'
  }
} satisfies Meta<typeof NieuwsCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
