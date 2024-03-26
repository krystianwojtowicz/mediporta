import React, { useState, useEffect } from 'react';
import { MuiButton } from './MuiButton';
import { MuiHeading6 } from './MuiHeading6';
import { MuiSpan } from './MuiSpan';
import { MuiWrapper } from './MuiWrapper';

interface IItem {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

enum SortByField {
  Popular = 'popular',
  Activity = 'activity',
  Name = 'name',
}

enum SortDirection {
  Ascending = 'asc',
  Descending = 'desc',
}

function List() {
  const [tags, setTags] = useState<IItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [sortBy, setSortBy] = useState<'popular' | 'activity' | 'name'>(
    'activity',
  );
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.stackexchange.com/2.3/tags?order=${sortDirection}&sort=${sortBy}&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
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

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSortBy = e.target.value as SortByField;
    setSortBy(selectedSortBy);
  };

  const handleSortDirectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSortDirection(e.target.value as SortDirection);
  };

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
        <MuiSpan title="Sort by:" />
        <select value={sortBy} onChange={handleSortByChange}>
          <option value="activity">Activity</option>
          <option value="name">Name</option>
          <option value="popular">Popular</option>
        </select>
        <select value={sortDirection} onChange={handleSortDirectionChange}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <div>
        <label>
          Items per page:
          <input
            type="number"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          />
        </label>
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
      <ul>
        {tags.map((tag: IItem) => (
          <li key={tag.name}>
            {tag.name} - Count: {tag.count}
          </li>
        ))}
      </ul>
    </MuiWrapper>
  );
}

export default List;
