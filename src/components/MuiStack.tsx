import { Stack } from '@mui/material';

export type TMuiStack = {
  children: React.ReactNode;
};

export const MuiStack = ({ children }: TMuiStack) => {
  return (
    <Stack
      sx={{ margin: '10px 0' }}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2 }}
      useFlexGap
    >
      {children}
    </Stack>
  );
};
