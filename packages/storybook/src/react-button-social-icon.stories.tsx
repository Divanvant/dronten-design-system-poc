import { Meta, StoryObj } from '@storybook/react';
import { SocialIconButton } from '../../components-react/src/Button';

const meta = {
  title: 'React Component/Buttons/SocialIconButton',
  id: 'react-social-icon-button',
  component: SocialIconButton,
  args: {
    link: '#',
    iconName: 'x-twitter',
  },
} satisfies Meta<typeof SocialIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
