import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';

import { MuiSelect, TMuiSelect } from '../components/MuiSelect';

export default {
  component: MuiSelect,
  title: 'MuiSelect',
} as Meta;

const Template: StoryFn<TMuiSelect> = (args: TMuiSelect) => {
  const [selectedValue, setSelectedValue] = useState(args.sortBy);

  const handleOnChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <MuiSelect {...args} sortBy={selectedValue} onChange={handleOnChange} />
  );
};

export const Base = Template.bind({});
Base.args = {
  sortByItems: ['1', '2', '3'] as string[],
  sortBy: '1' as string,
  title: 'Items',
};
