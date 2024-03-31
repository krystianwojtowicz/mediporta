import { Button } from '@mui/material';

export type TMuiButton = {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const MuiButton = ({ title, onClick }: TMuiButton) => {
  return (
    <Button variant="contained" onClick={onClick} sx={{ margin: '20px 5px 0' }}>
      {title}
    </Button>
  );
};
