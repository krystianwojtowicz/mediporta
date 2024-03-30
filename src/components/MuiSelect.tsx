import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { IItemSortBy } from '../store/dataSlice';

export type IMuiSelect = {
  sortByItems: IItemSortBy[];
  onChange: (value: IItemSortBy) => void;
  sortBy: IItemSortBy;
  title: string;
  style?: React.CSSProperties;
};

export const MuiSelect = ({
  onChange,
  sortBy,
  sortByItems,
  title,
  style,
}: IMuiSelect) => {
  const selectOption = (option: IItemSortBy) => {
    onChange(option);
  };
  return (
    <FormControl style={style}>
      <InputLabel id="sort-by-label">Sort by {title}</InputLabel>
      <Select labelId="sort-by-label" id="sort-by" value={sortBy.value}>
        {sortByItems.map((item: IItemSortBy) => (
          <MenuItem
            key={item.value}
            value={item.value}
            onClick={() => selectOption(item)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
