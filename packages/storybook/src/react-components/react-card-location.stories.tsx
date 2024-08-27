import { LocationCard } from '@dronten/components-react/src';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'React Component/Cards/Location Card',
  id: 'react-location-card',
  component: LocationCard,
  argTypes: {
    cardTitle: {
      name: 'Card title',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    description: {
      name: 'Card description',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    imageUrl: {
      name: 'Card image',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    mapLink: {
      name: 'Card mapLink',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    street: {
      name: 'Card street',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    zipCode: {
      name: 'Card zipCode',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    city: {
      name: 'Card city',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    cardTitle: 'Gemeentehuis',
    imageUrl:
      'https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-1024x768.jpg 1024w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-300x225.jpg 300w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-768x576.jpg 768w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-1536x1152.jpg 1536w, https://openpdc.dronten.nl/wp-content/uploads/2021/03/Voorkant-huis-van-de-gemeente-ver-af-2048x1536.jpg 2048w',
    description: 'Gemeentehuis gemeente Dronten',
    mapLink: '',
    street: 'De Rede 1',
    zipCode: '8251 ER',
    city: 'Dronten',
  },
} satisfies Meta<typeof LocationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
