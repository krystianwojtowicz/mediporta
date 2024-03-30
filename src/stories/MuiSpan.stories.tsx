import { Meta } from '@storybook/react';
import { MuiSpan } from '../components/MuiSpan';

interface ISpanProps {
  title: string;
}

export default {
  component: MuiSpan,
  title: 'MuiSpan',
} as Meta;

const Template: React.FC<ISpanProps> = (args) => <MuiSpan {...args} />;

export const Base = () => <Template title="Example Text" />;
