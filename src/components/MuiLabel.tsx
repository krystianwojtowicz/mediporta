import { InputLabel } from '@mui/material';

export type TMuiLabel = {
  title: string;
  children: React.ReactNode;
};

export const MuiLabel = ({ title, children }: TMuiLabel) => (
  <InputLabel
    sx={{
      paddingTop: '10px',
      gap: '10px',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {title}
    {children}
  </InputLabel>
);
