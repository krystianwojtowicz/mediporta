// import { Meta } from '@storybook/react';
// import { MuiLabel } from '../components/MuiLabel';

// interface ILabelProps {
//   title: string;
//   children: React.ReactNode;
// }

// export default {
//   component: MuiLabel,
//   title: 'MuiLabel',
// } as Meta;

// const Template: React.FC<ILabelProps> = ({ title, children }) => (
//   <MuiLabel title={title}>{children}</MuiLabel>
// );

// export const Base = () => (
//   <Template title="Example Text" children={<div>children</div>} />
// );
import { Meta } from '@storybook/react';
import { MuiLabel } from '../components/MuiLabel';

interface ILabelProps {
  title: string;
  children: React.ReactNode;
}

export default {
  component: MuiLabel,
  title: 'MuiLabel',
} as Meta;

const Template: React.FC<ILabelProps> = ({ title, children }) => (
  <MuiLabel title={title}>{children}</MuiLabel>
);

export const Base = () => (
  <Template title="Example Text" children={<div>children</div>} />
);
