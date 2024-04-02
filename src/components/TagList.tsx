import { List, ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeCurrentPage,
  changeItemsPerPage,
  changeSortBy,
  changeSortDirection,
  fetchData,
  IItem,
  sortByItems,
  sortDirectionByItems,
} from '../store/dataSlice';
import { AppDispatch } from '../store/store';
import { RootState } from '../store/store';
import { MuiButton } from './MuiButton';
import { MuiHeading6 } from './MuiHeading6';
import { MuiInput } from './MuiInput';
import { MuiLabel } from './MuiLabel';
import { MuiSelect } from './MuiSelect';
import { MuiStack } from './MuiStack';
import { MuiWrapper } from './MuiWrapper';

export const TagList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data,
    currentPage,
    itemsPerPage,
    sortBy,
    sortDirection,
    loading,
    error,
  } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(
      fetchData(
        `https://api.stackexchange.com/2.3/tags?order=${sortDirection}&sort=${sortBy}&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
      ),
    );
  }, [currentPage, itemsPerPage, sortBy, sortDirection]);

  const handlePageChange = (pageNumber: number) => {
    dispatch(changeCurrentPage(pageNumber));
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeItemsPerPage(parseInt(e.target.value)));
    dispatch(changeCurrentPage(1));
  };

  if (error) {
    return (
      <MuiWrapper>
        <MuiHeading6 title={`Error fetching data: ${error}`} />
      </MuiWrapper>
    );
  }

  if (loading) {
    return (
      <MuiWrapper>
        <MuiHeading6 title="Loading..." />
      </MuiWrapper>
    );
  }

  return (
    <MuiWrapper>
      <MuiHeading6 title="Tag Browser" />
      <MuiStack>
        <MuiSelect
          title="field"
          sortBy={sortBy}
          onChange={(option: string) => dispatch(changeSortBy(option))}
          sortByItems={sortByItems}
        />
        <MuiSelect
          title="direction"
          sortBy={sortDirection}
          onChange={(option: string) => dispatch(changeSortDirection(option))}
          sortByItems={sortDirectionByItems}
        />
      </MuiStack>
      <div>
        <MuiLabel title="Items per page:">
          <MuiInput
            handleItemsPerPageChange={handleItemsPerPageChange}
            itemsPerPage={itemsPerPage}
          />
        </MuiLabel>
      </div>
      <div>
        {currentPage > 1 && (
          <MuiButton
            title="Previous Page"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        )}
        {data.length === itemsPerPage && (
          <MuiButton
            title="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </div>
      <List>
        {!loading &&
          data.length &&
          data.map((tag: IItem) => (
            <ListItem key={tag.name}>
              <ListItemText primary={`${tag.name}: ${tag.count}`} />
            </ListItem>
          ))}
      </List>
    </MuiWrapper>
  );
};
