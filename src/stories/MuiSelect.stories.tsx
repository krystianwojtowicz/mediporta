import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { MuiSelect, IMuiSelect } from '../components/MuiSelect';
import { IItemSortBy } from '../store/dataSlice';

export default {
  component: MuiSelect,
  title: 'MuiSelect',
} as Meta;

const Template: StoryFn<IMuiSelect> = (args: IMuiSelect) => {
  const [selectedValue, setSelectedValue] = useState(args.sortBy);

  const handleOnChange = (value: IItemSortBy) => {
    setSelectedValue(value);
  };

  return (
    <MuiSelect {...args} sortBy={selectedValue} onChange={handleOnChange} />
  );
};

export const Base = Template.bind({});
Base.args = {
  sortByItems: [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ] as IItemSortBy[],
  sortBy: { value: '1', label: '1' } as IItemSortBy,
  title: 'Items',
};
