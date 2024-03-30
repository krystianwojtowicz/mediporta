import { Button } from '@mui/material';

export interface IButton {
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
