import { Meta } from '@storybook/react';

import { MuiWrapper, TMuiWrapper } from '../components/MuiWrapper';

export default {
  component: MuiWrapper,
  title: 'MuiWrapper',
} as Meta;

const Template: React.FC<TMuiWrapper> = (args) => <MuiWrapper {...args} />;

export const Base = () => (
  <Template>
    <div>Content inside MuiWrapper</div>
  </Template>
);
