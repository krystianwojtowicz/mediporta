import { Meta } from '@storybook/react';

import { MuiHeading6, TMuiHeading6 } from '../components/MuiHeading6';

export default {
  component: MuiHeading6,
  title: 'MuiHeading6',
} as Meta;

const Template: React.FC<TMuiHeading6> = (args) => <MuiHeading6 {...args} />;

export const Base = () => <Template title="Example Text" />;
