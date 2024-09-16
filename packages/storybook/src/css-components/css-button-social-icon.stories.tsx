/* @license CC0-1.0 */

import readme from '@dronten/components-css/button/README.md?raw'
import type { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'
import '@dronten/components-css/button/index.scss'

const SocialIconButton = ({ link, iconName }: PropsWithChildren<{ link: string; iconName: string }>) => (
  <a href={link} target="_blank" rel="noreferrer">
    <i className={`dronten-social-icon fab fa-${iconName}`}></i>
    <span className="sr-only">{iconName.split('-')[0]} van Gemeente Dronten, opent in nieuw tabblad</span>
  </a>
)

const meta = {
  title: 'CSS Component/Buttons/SocialIconButton',
  id: 'css-social-icon-button',
  component: SocialIconButton,
  decorators: [(story) => <div style={{ background: '#f8f8f8', padding: '1rem' }}>{story()}</div>],
  argTypes: {
    iconName: {
      name: 'Content',
      description: 'Button icon name (from fontawesome)',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    },
    link: {
      name: 'Content',
      description: 'Button Link',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    }
  },
  args: {
    iconName: 'x-twitter',
    link: '#'
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  }
} satisfies Meta<typeof SocialIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Dronten social icon button'
}
