import React, { useId } from 'react';
import { SearchIcon } from '../Icons/SearchIcon';

type SearchProps = {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currencyFilter: string;
};

export function SearchBar({ handleFilterChange, currencyFilter }: SearchProps) {

  const filterCryptoId = useId();

  return (
    <label htmlFor={filterCryptoId} className="block">
      <span className="block text-lg font-medium text-slate-50 py-3">Search for a cryptocurrency</span>
      <div className="shadow p-4 rounded-lg dark:bg-slate-900 ">
        <div className="flex items-center space-x-2">
          <SearchIcon />
          <input
            id={filterCryptoId}
            className="w-full focus:outline-none dark:bg-gray-700 dark:text-white p-3"
            placeholder="Type currency name"
            type="text"
            value={currencyFilter}
            onChange={handleFilterChange}
          />
        </div>
      </div>
    </label>
  );
};
