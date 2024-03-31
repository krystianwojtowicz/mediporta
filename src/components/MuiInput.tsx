import { TextField } from '@mui/material';

export type TMuiInput = {
  itemsPerPage: number;
  handleItemsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MuiInput = ({
  itemsPerPage,
  handleItemsPerPageChange,
}: TMuiInput) => {
  return (
    <TextField
      sx={{ width: '150px' }}
      type="number"
      label="Items per page"
      value={itemsPerPage}
      onChange={handleItemsPerPageChange}
      variant="outlined"
    />
  );
};
