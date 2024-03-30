import React, { useEffect } from 'react';
import { MuiButton } from './MuiButton';
import { MuiHeading6 } from './MuiHeading6';
import { MuiWrapper } from './MuiWrapper';
import { MuiSelect } from './MuiSelect';
import { MuiLabel } from './MuiLabel';
import { MuiInput } from './MuiInput';
import { List, ListItem, ListItemText } from '@mui/material';
import {
  IItem,
  IItemSortBy,
  changeCurrentPage,
  changeItemsPerPage,
  changeSortBy,
  changeSortDirection,
  fetchData,
  sortByItems,
  sortDirectionByItems,
} from '../store/dataSlice';
import { RootState } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store/store';

function TagList() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data);
  const currentPage = useSelector((state: RootState) => state.data.currentPage);
  const itemsPerPage = useSelector(
    (state: RootState) => state.data.itemsPerPage,
  );
  const sortBy = useSelector((state: RootState) => state.data.sortBy);
  const sortDirection = useSelector(
    (state: RootState) => state.data.sortDirection,
  );

  useEffect(() => {
    dispatch(
      fetchData(
        `https://api.stackexchange.com/2.3/tags?order=${sortDirection.value}&sort=${sortBy.value}&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
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

  if (data.error) {
    return <MuiWrapper>Error fetching data: {data.error}</MuiWrapper>;
  }

  if (data.loading) {
    return <MuiWrapper>Loading...</MuiWrapper>;
  }

  return (
    <MuiWrapper>
      <MuiHeading6 title="Tag Browser" />
      <div>
        <MuiSelect
          title="field"
          sortBy={sortBy}
          onChange={(o: IItemSortBy) => dispatch(changeSortBy(o))}
          sortByItems={sortByItems}
        />
        <MuiSelect
          style={{ marginLeft: '10px' }}
          title="direction"
          sortBy={sortDirection}
          onChange={(o: IItemSortBy) => dispatch(changeSortDirection(o))}
          sortByItems={sortDirectionByItems}
        />
      </div>
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
        {data.data.length === itemsPerPage && (
          <MuiButton
            title="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </div>
      <List>
        {!data.loading &&
          data.data.length &&
          data.data.map((tag: IItem) => (
            <ListItem key={tag.name}>
              <ListItemText primary={`${tag.name} - Count: ${tag.count}`} />
            </ListItem>
          ))}
      </List>
    </MuiWrapper>
  );
}

export default TagList;
