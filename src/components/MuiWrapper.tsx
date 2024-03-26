import Box from '@mui/material/Box';

export const MuiWrapper = ({ children }: { children: React.ReactNode }) => {
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
