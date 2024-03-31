import { Meta } from '@storybook/react';

import { MuiLabel, TMuiLabel } from '../components/MuiLabel';

export default {
  component: MuiLabel,
  title: 'MuiLabel',
} as Meta;

const Template: React.FC<TMuiLabel> = ({ title, children }) => (
  <MuiLabel title={title}>{children}</MuiLabel>
);

export const Base = () => (
  <Template title="Example Text" children={<div>children</div>} />
);
