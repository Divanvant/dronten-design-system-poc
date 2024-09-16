/* @license CC0-1.0 */

import readme from '@dronten/components-css/card/README.md?raw'
import '@dronten/components-css/card/index.scss'
import { BannerType } from '@dronten/components-react/src/Banner'
import type { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'

const Banner = ({
  title,
  imageUrl,
  description,
  bannerType = BannerType.info
}: PropsWithChildren<{
  title?: string
  imageUrl?: string
  description: string
  bannerType: BannerType
}>) => (
  <div className={`dronten-banner dronten-banner__${BannerType[bannerType]}`}>
    {imageUrl && <img src={imageUrl} alt="" />}
    {title && title !== '' && <strong>{title}</strong>}
    {description}
  </div>
)

const meta = {
  title: 'CSS Component/Banner',
  id: 'css-banner',
  component: Banner,
  argTypes: {
    title: {
      name: 'Banner title',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: ''
    },
    description: {
      name: 'Banner description',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    imageUrl: {
      name: 'Banner image',
      type: {
        name: 'string',
        required: false
      },
      defaultValue: ''
    },
    bannerType: {
      name: 'Banner type',
      type: {
        name: 'string'
      },
      options: ['info', 'warning', 'error', 'success'],
      defaultValue: 'info'
    }
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  }
} satisfies Meta<typeof Banner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Informatie',
    description: 'Deze banner kan meer informatie bieden',
    bannerType: BannerType.info
  }
}

export const Warning: Story = {
  args: {
    title: 'Waarschuwing',
    description: 'Deze banner kan een waarschuwing weergeven',
    bannerType: BannerType.warning
  }
}

export const Error: Story = {
  args: {
    title: 'Fout',
    description: 'Deze banner kan een fout weergeven',
    bannerType: BannerType.error
  }
}

export const Success: Story = {
  args: {
    title: 'Succes',
    description: 'Deze banner kan een succesbericht weergeven',
    bannerType: BannerType.success
  }
}
