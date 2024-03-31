import { Meta } from '@storybook/react';

import { MuiSpan, TMuiSpan } from '../components/MuiSpan';

export default {
  component: MuiSpan,
  title: 'MuiSpan',
} as Meta;

const Template: React.FC<TMuiSpan> = (args) => <MuiSpan {...args} />;

export const Base = () => <Template title="Example Text" />;
