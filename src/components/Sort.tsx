import React, { useState } from 'react';
import '../App.css';
type SortOrder='asc' | 'desc';
// interface for props
interface SortProps {
  onSort: (order: SortOrder) => void;
}

const Sort = ({ onSort }:SortProps) => {
  const [order, setOrder] = useState<'asc' | 'desc'>();

  

  // Funkcija za promjenu redoslijeda sortiranja
  const handleSort1 = (selectedOrder: SortOrder) => {
    setOrder(selectedOrder); 
  };

  // Funkcija za podnošenje forme
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting order: ', order); 
    onSort(order); 
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <h1>Control</h1> 
      <div className="ml-2">
        <button
          className={` ${order === 'asc' } bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded `   } 
          type="button"
          onClick={() => handleSort1('asc')} 
        >
          Ascending
        </button>
        <button
          className={` ${order === 'desc' }  bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded  `} 
          type="button"
          onClick={() => handleSort1('desc')} 
        >
          Descending
        </button>
      </div>
      <button className=" bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded" type="submit">
        Submit
      </button> 
    </form>
  );
};

export default Sort;
