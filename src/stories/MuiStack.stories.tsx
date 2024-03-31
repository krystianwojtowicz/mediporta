import { Meta } from '@storybook/react';

import { MuiStack, TMuiStack } from '../components/MuiStack';

export default {
  component: MuiStack,
  title: 'MuiStack',
} as Meta;

const Template: React.FC<TMuiStack> = (args) => <MuiStack {...args} />;

export const Base = () => (
  <Template>
    <div>1</div>
    <div>2</div>
  </Template>
);
