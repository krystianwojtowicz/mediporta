import Box from '@mui/material/Box';

export type TMuiWrapper = {
  children: React.ReactNode;
};

export const MuiWrapper = ({ children }: TMuiWrapper) => {
  return (
    <Box
      sx={{
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  );
};
export default MuiWrapper;
