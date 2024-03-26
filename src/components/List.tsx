import React, { useState, useEffect } from 'react';

interface IItem {
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  name: string;
}

function List() {
  const [tags, setTags] = useState<IItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    fetch(
      `https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&page=${currentPage}&pagesize=${itemsPerPage}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setTags(data.items);
        }
      })
      .catch((error) => console.error('Error fetching tags:', error));
  }, [currentPage, itemsPerPage]);

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
