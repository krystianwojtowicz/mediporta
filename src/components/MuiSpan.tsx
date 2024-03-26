import Typography from '@mui/material/Typography';

interface ISpan {
  title: string;
}

export const MuiSpan = ({ title }: ISpan) => {
  return <Typography variant="body1">{title}</Typography>;
};
