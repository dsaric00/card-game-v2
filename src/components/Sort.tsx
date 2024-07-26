import React, { useState } from 'react';
import '../App.css';

type SortOrder = 'asc' | 'desc';


interface SortProps {
  onSort: (order: SortOrder) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Sort = ({ onSort, isDarkMode, toggleDarkMode }: SortProps) => {
  // State to manage the sort order, default is 'asc'
  const [order, setOrder] = useState<SortOrder>('asc');

  //Function to change the sort order
  const handleSort = (selectedOrder: SortOrder) => {
    setOrder(selectedOrder);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting order: ', order);
    onSort(order);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-center rounded-3xl border border-black m-3  dark:border-white "
    >
      <div className="flex justify-between items-center p-5">
        <h1 className="text-4xl text-left px-3">Controls</h1>
        <button
          className="rounded-3xl  bg-slate-300  text-black p-3 hover:bg-slate-500"
          type="button"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex justify-center">
        <button
          className={` ${order === 'asc'} text-center bg-blue-400 focus:bg-blue-500 focus:ring hover:bg-blue-500 font-sans py-2 px-4 rounded-xl m-2 text-2xl `}
          type="button"
          onClick={() => handleSort('asc')}
        >
          SORT ASC
        </button>
        <button
          className={` ${order === 'desc'} text-center bg-blue-400 focus:bg-blue-500 focus:ring hover:bg-blue-500  font-sans py-2 px-4 rounded-xl m-2 text-2xl `}
          type="button"
          onClick={() => handleSort('desc')}
        >
          SORT DESC
        </button>
      </div>
      <button
        className="bg-green-500 hover:bg-green-600 font-sans py-2 px-5 mb-3 rounded-full text-2xl md:mb-3 md:px-14"
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Sort;
