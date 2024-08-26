import { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '../../components-react/src/Button';

const meta = {
  title: 'React Component/Buttons/IconButton',
  id: 'react-icon-button',
  component: IconButton,
  args: {
    iconName: 'phone-alt',
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
