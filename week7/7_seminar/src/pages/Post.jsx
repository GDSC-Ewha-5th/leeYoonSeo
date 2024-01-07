import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSaveNote = () => {
    const note = {
      id: new Date().getTime(),
      title,
      content,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...existingNotes, note];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate(-1);
  };

  return (
    <div>
      <h1>Create Note</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSaveNote}>Save</button>
    </div>
  );
};

export default Post;
