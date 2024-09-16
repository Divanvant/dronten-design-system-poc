import { SocialIconButton } from '@dronten/components-react/src/Button'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'React Component/Buttons/SocialIconButton',
  id: 'react-social-icon-button',
  component: SocialIconButton,
  decorators: [(story) => <div style={{ background: '#f8f8f8', padding: '1rem' }}>{story()}</div>],
  args: {
    link: '#',
    iconName: 'x-twitter'
  }
} satisfies Meta<typeof SocialIconButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
