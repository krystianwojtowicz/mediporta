import Typography from '@mui/material/Typography';

interface IMuiHeading6 {
  title: string;
}

export const MuiHeading6 = ({ title }: IMuiHeading6) => {
  return <Typography variant="h6">{title}</Typography>;
};