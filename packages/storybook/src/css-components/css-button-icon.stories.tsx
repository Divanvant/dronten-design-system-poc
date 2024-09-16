/* @license CC0-1.0 */

import readme from '@dronten/components-css/button/README.md?raw'
import type { Meta, StoryObj } from '@storybook/react'
import { PropsWithChildren } from 'react'
import '@dronten/components-css/button/index.scss'

const IconButton = ({ iconName }: PropsWithChildren<{ iconName: string }>) => (
  <i className={`dronten-icon-button fas fa-${iconName}`}></i>
)

const meta = {
  title: 'CSS Component/Buttons/IconButton',
  id: 'css-icon-button',
  component: IconButton,
  argTypes: {
    iconName: {
      name: 'Content',
      description: 'Button icon name (from fontawesome)',
      type: {
        name: 'string',
        required: true
      },
      defaultValue: ''
    }
  },
  args: {
    iconName: 'map-marker-alt'
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme
      }
    }
  }
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  name: 'Dronten icon button'
}
