// SearchBar.js
import { useState } from 'react';

export default function SearchBar({ initialItems, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filtered = initialItems.filter(item => 
      item['Organization Name'].toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearch(filtered);
  };

  return (
    <div className="search-container">
      <input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Search for startups..." 
        className="search-bar"
      />
      <button onClick={handleSearch} className="search-btn">Press</button>
    </div>
  );
}
