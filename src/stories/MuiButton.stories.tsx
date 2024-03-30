import { Meta } from '@storybook/react';
import { MuiButton, IButton } from '../components/MuiButton';

export default {
  component: MuiButton,
  title: 'MuiButton',
} as Meta;

const Template: React.FC<IButton> = (args) => <MuiButton {...args} />;

export const Base = () => (
  <Template title="button" onClick={() => alert('click')} />
);
