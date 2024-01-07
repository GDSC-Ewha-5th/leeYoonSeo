

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import moment from 'moment';

// const CreateNote = () => {
//   const navigate = useNavigate();
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const saveNote = () => {
//     const notes = JSON.parse(localStorage.getItem("notes")) || [];
//     const newNote = {
//       id: moment().toISOString(),
//       title,
//       content,
//       createdAt: moment().toISOString(),
//       updatedAt: moment().toISOString(),
//     };
//     notes.push(newNote);
//     localStorage.setItem("notes", JSON.stringify(notes));
//     navigate("/");
//   };

//   return (
//     <div>
//       <input placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
//       <textarea placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
//       <button onClick={saveNote}>저장</button>
//     </div>
//   );
// };

// export default CreateNote;
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
