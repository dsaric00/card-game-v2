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
    <form onSubmit={handleSubmit} className="flex items-center">
      <h1>Control</h1> 
      <div className="ml-2">
        <button
          className={`btn btn-primary ${order === 'asc' ? 'selected' : ''}`} 
          type="button"
          onClick={() => handleSort1('asc')} 
        >
          Ascending
        </button>
        <button
          className={`btn btn-primary ${order === 'desc' ? 'selected' : ''}`} 
          type="button"
          onClick={() => handleSort1('desc')} 
        >
          Descending
        </button>
      </div>
      <button className="submit btn btn-success" type="submit">
        Submit
      </button> 
    </form>
  );
};

export default Sort;
