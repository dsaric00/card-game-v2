import React, { useState } from 'react';
import '../App.css';

type SortOrder = 'asc' | 'desc';

// interface for props
interface SortProps {
  onSort: (order: SortOrder) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Sort = ({ onSort, isDarkMode, toggleDarkMode }: SortProps) => {
  // State to manage the sort order, default is 'asc'
  const [order, setOrder] = useState<SortOrder>('asc');

  //Function to change the sort order
  const handleSort1 = (selectedOrder: SortOrder) => {
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
      className="text-center border border-black m-5  dark:border-white "
    >
      <div className='flex justify-between items-center p-5'>
      <h1 className="text-4xl text-left">Control</h1>
      <button
        className="rounded-full bg-slate-300  text-black p-2"
        type="button"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      </div>

      <div className="">
        <button
          className={` ${order === 'asc'} bg-blue-500 focus:bg-red-700 focus:ring  font-sans py-2 px-4 rounded-xl m-4 text-2xl `}
          type="button"
          onClick={() => handleSort1('asc')}
        >
          Ascending
        </button>
        <button
          className={` ${order === 'desc'}  bg-blue-500 focus:bg-red-700 focus:ring  font-sans py-2 px-4 rounded-xl m-4 text-2xl `}
          type="button"
          onClick={() => handleSort1('desc')}
        >
          Descending
        </button>
      </div>
      <button
        className=" bg-green-600 hover:bg-green-900  font-sans py-2 px-4 m-5 rounded-full text-2xl "
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Sort;
