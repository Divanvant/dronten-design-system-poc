/* @license CC0-1.0 */

import readme from '@dronten/components-css/card/README.md?raw';
import '@dronten/components-css/card/index.scss';
import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';

const NieuwsCard = ({
  imageUrl,
  linkUrl,
  title,
  description,
  dateTime,
}: PropsWithChildren<{
  imageUrl: string;
  linkUrl: string;
  title: string;
  description?: string;
  dateTime: string;
}>) => (
  <div className="dronten-nieuws-card">
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
);

const meta = {
  title: 'CSS Component/Cards/Nieuws Card',
  id: 'css-nieuws-card',
  component: NieuwsCard,
  argTypes: {
    imageUrl: {
      name: 'Card image',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    linkUrl: {
      name: 'Card link',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
    title: {
      name: 'Card title',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: '',
    },
    description: {
      name: 'Card description',
      type: {
        name: 'string',
        required: false,
      },
      defaultValue: '',
    },
    dateTime: {
      name: 'Card dateTime',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: '',
    },
  },
  args: {
    title: 'Meerpaaldagen 2024',
    description:
      'Op 8, 9 en 10 augustus 2024 wordt op het Meerpaalplein en in stadscentrum SuyderSee Dronten het welbekende evenement de Meerpaaldagen georganiseerd. Kijk hier voor meer informatie.',
    imageUrl:
      'https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-1024x683.jpg 1024w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-300x200.jpg 300w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-768x512.jpg 768w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-1536x1024.jpg 1536w, https://openpub.dronten.nl/wp-content/uploads/2024/08/MF02432-2048x1365.jpg 2048w',
    linkUrl: 'https://www.dronten.nl/actueel/meerpaaldagen-2024/',
    dateTime: '5 augustus 2024',
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof NieuwsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Dronten card',
};
