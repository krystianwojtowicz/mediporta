import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export type TMuiSelect = {
  sortByItems: string[];
  onChange: (arg: string) => void;
  sortBy: string;
  title: string;
};

export const MuiSelect = ({
  onChange,
  sortBy,
  sortByItems,
  title,
}: TMuiSelect) => {
  const selectOption = (option: string) => {
    onChange(option);
  };
  return (
    <FormControl sx={{ width: '150px' }}>
      <InputLabel id="sort-by-label">Sort by {title}</InputLabel>
      <Select labelId="sort-by-label" id="sort-by" value={sortBy}>
        {sortByItems.map((item: string) => (
          <MenuItem key={item} value={item} onClick={() => selectOption(item)}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
