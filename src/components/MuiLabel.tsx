import { InputLabel } from '@mui/material';

export const MuiLabel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <InputLabel sx={{ padding: '10px' }}>
    {title}
    {children}
  </InputLabel>
);
