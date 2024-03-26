import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    fetch(
      `https://api.stackexchange.com/2.3/tags?order=${sortDirection}&sort=${sortBy}&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setTags(data.items);
        }
      })
      .catch((error) => console.error('Error fetching tags:', error));
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

  return (
    <div>
      <h1>Tag Browser</h1>
      {tags.length > 0 && (
        <>
          <div>
            Sort by:
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
              <button onClick={() => handlePageChange(currentPage - 1)}>
                Previous Page
              </button>
            )}
            {tags.length === itemsPerPage && (
              <button onClick={() => handlePageChange(currentPage + 1)}>
                Next Page
              </button>
            )}
          </div>
          <ul>
            {tags.map((tag: IItem) => (
              <li key={tag.name}>
                {tag.name} - Count: {tag.count}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default List;
