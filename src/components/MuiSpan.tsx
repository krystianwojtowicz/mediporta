import Typography from '@mui/material/Typography';

export type TMuiSpan = {
  title: string;
};

export const MuiSpan = ({ title }: TMuiSpan) => {
  return <Typography variant="body1">{title}</Typography>;
};
