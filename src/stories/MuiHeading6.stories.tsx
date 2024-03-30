import { Meta } from '@storybook/react';
import { MuiHeading6, IMuiHeading6 } from '../components/MuiHeading6';

export default {
  component: MuiHeading6,
  title: 'MuiHeading6',
} as Meta;

const Template: React.FC<IMuiHeading6> = (args) => <MuiHeading6 {...args} />;

export const Base = () => <Template title="Example Text" />;
