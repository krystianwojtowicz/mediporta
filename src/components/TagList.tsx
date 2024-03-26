import React, { useState, useEffect } from 'react';
import { MuiButton } from './MuiButton';
import { MuiHeading6 } from './MuiHeading6';
import { MuiWrapper } from './MuiWrapper';
import { MuiSelect, IItemSortBy } from './MuiSelect';
import { MuiLabel } from './MuiLabel';
import { MuiInput } from './MuiInput';
import { List, ListItem, ListItemText } from '@mui/material';

interface IItem {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

const sortByItems = [
  { value: 'activity', label: 'Activity' },
  { value: 'name', label: 'Name' },
  { value: 'popular', label: 'Popular' },
];

const sortDirectionByItems = [
  { value: 'desc', label: 'Descending' },
  { value: 'asc', label: 'Ascending' },
];

function TagList() {
  const [tags, setTags] = useState<IItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<IItemSortBy>({
    value: 'activity',
    label: 'Activity',
  });
  const [sortDirection, setSortDirection] = useState<IItemSortBy>({
    value: 'desc',
    label: 'Descending',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.stackexchange.com/2.3/tags?order=${sortDirection.value}&sort=${sortBy.value}&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
        );

        if (res) {
          const data = await res.json();
          setTags(data.items);
          setLoading(false);
        }
      } catch (error: unknown) {
        setLoading(false);
        setError((error as Error).message);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage, sortBy, sortDirection]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  if (error) {
    return <MuiWrapper>Error fetching tags: {error}</MuiWrapper>;
  }

  if (loading) {
    return <MuiWrapper>Loading...</MuiWrapper>;
  }

  return (
    <MuiWrapper>
      <MuiHeading6 title="Tag Browser" />
      <div>
        <MuiSelect
          title="field"
          sortBy={sortBy}
          onChange={(o: IItemSortBy) => setSortBy(o)}
          sortByItems={sortByItems}
        />
        <MuiSelect
          title="direction"
          sortBy={sortDirection}
          onChange={(o: IItemSortBy) => setSortDirection(o)}
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
        {tags.length === itemsPerPage && (
          <MuiButton
            title="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        )}
      </div>
      <List>
        {tags.map((tag: IItem) => (
          <ListItem key={tag.name}>
            <ListItemText primary={`${tag.name} - Count: ${tag.count}`} />
          </ListItem>
        ))}
      </List>
    </MuiWrapper>
  );
}

export default TagList;
