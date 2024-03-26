import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export interface IItemSortBy {
  value: string;
  label: string;
}

interface IMuiSelect {
  sortByItems: IItemSortBy[];
  onChange: (value: IItemSortBy) => void;
  sortBy: IItemSortBy;
  title: string;
}

export const MuiSelect = ({
  onChange,
  sortBy,
  sortByItems,
  title,
}: IMuiSelect) => {
  const selectOption = (option: IItemSortBy) => {
    onChange(option);
  };
  return (
    <FormControl style={{ margin: '10px' }}>
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
