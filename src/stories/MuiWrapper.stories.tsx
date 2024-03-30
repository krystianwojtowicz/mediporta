// import type { Meta, StoryObj } from '@storybook/react';

// import { MuiWrapper } from '../components/MuiWrapper';

// const meta: Meta<typeof MuiWrapper> = {
//   component: MuiWrapper,
//   title: 'MuiWrapper',
// };

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Base: Story = {
//   args: {},
// };
import React from 'react';
import { Meta } from '@storybook/react';
import { MuiWrapper } from '../components/MuiWrapper';

interface IMuiWrapperProps {
  children: React.ReactNode;
}

export default {
  component: MuiWrapper,
  title: 'MuiWrapper',
} as Meta;

const Template: React.FC<IMuiWrapperProps> = (args) => <MuiWrapper {...args} />;

export const Base = () => (
  <Template>
    <div>Content inside MuiWrapper</div>
  </Template>
);
