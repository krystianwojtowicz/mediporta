import type { Meta, StoryObj } from '@storybook/react';

import MuiWrapper from './MuiWrapper';

const meta: Meta<typeof MuiWrapper> = {
  component: MuiWrapper,
  title: 'MuiWrapper',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {},
};
