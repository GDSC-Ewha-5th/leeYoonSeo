

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Main = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState(''); // 검색어를 state로 관리

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(search.toLowerCase())
  ); // 검색어에 따라 노트 목록을 필터링

  return (
    <div>
      <h1>Notes</h1>
      <input 
        type="text" 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        placeholder="Search by title"
      />
      <Link to="/post">Create Note</Link>
      
      <ul>
        {filteredNotes.map((note) => ( // 필터링된 노트 목록을 출력
          <li key={note.id}>
            <Link to={`/detail/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
