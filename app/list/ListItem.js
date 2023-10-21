'use client'

import Link from "next/link";
import { useState } from 'react';
import SearchBar from './SearchBar';

export default function ListItem({ result }) {
  const [filteredResults, setFilteredResults] = useState(result);

  return (
    <div>
      <SearchBar 
        initialItems={result} 
        onSearch={(filtered) => {
          setFilteredResults(filtered);
        }}
      />
      <div className="list-bg">
          {
            filteredResults.length === 0 ? 
            <p>No results found</p> :
            filteredResults.map((a, i) => (
              <div className={"listItem"} key={a._id}>
                <Link href={'/detail/' + a._id} prefetch={false}>
                  <span className={"listLink"}>
                    <h4>{a['Organization Name']}</h4>
                  </span>
                </Link>
                <div>
                  <p>Founded in {a['Founded Date']} | Industry : {a.Industries} | Total Funding Amount: {a['Total Funding Amount']}</p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
}
