import { TextField } from '@mui/material';

interface IMuiInput {
  itemsPerPage: number;
  handleItemsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MuiInput = ({
  itemsPerPage,
  handleItemsPerPageChange,
}: IMuiInput) => {
  return (
    <TextField
      type="number"
      label="Items per page"
      value={itemsPerPage}
      onChange={handleItemsPerPageChange}
      variant="outlined"
    />
  );
};
