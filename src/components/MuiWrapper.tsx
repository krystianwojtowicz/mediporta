import Box from '@mui/material/Box';

interface IMuiWrapper {
  children: React.ReactNode;
}

export const MuiWrapper = ({ children }: IMuiWrapper) => {
  return (
    <Box
      sx={{
        margin: '20px',
      }}
    >
      {children}
    </Box>
  );
};
