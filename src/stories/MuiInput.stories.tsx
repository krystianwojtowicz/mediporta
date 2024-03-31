import { Meta } from '@storybook/react';
import { useState } from 'react';

import { MuiInput, TMuiInput } from '../components/MuiInput';

export default {
  component: MuiInput,
  title: 'MuiInput',
} as Meta;

const Template: React.FC<TMuiInput> = (args) => {
  return (
    <MuiInput
      itemsPerPage={args.itemsPerPage}
      handleItemsPerPageChange={args.handleItemsPerPageChange}
    />
  );
};

export const Base = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);

    if (!isNaN(newValue)) {
      setItemsPerPage(newValue);
    }
  };
  return (
    <Template
      itemsPerPage={itemsPerPage}
      handleItemsPerPageChange={handleItemsPerPageChange}
    />
  );
};
