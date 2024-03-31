import Typography from '@mui/material/Typography';

export type TMuiHeading6 = {
  title: string;
};

export const MuiHeading6 = ({ title }: TMuiHeading6) => {
  return <Typography variant="h6">{title}</Typography>;
};
