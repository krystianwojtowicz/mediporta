import { Button } from '@mui/material';

interface IButton {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const MuiButton = ({ title, onClick }: IButton) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {title}
    </Button>
  );
};
