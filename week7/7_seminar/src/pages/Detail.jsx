
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import moment from 'moment';

// const NoteDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [note, setNote] = useState(null);

//   useEffect(() => {
//     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     const foundNote = savedNotes.find((note) => note.id === id);
//     setNote(foundNote);
//   }, [id]);

//   const updateNote = () => {
//     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     const updatedNotes = savedNotes.map((savedNote) => {
//       if (savedNote.id === id) {
//         return { ...savedNote, title: note.title, content: note.content, updatedAt: moment().toISOString() };
//       }
//       return savedNote;
//     });
//     localStorage.setItem("notes", JSON.stringify(updatedNotes));
//     navigate("/");
//   };

//   const deleteNote = () => {
//     const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
//     const updatedNotes = savedNotes.filter((savedNote) => savedNote.id !== id);
//     localStorage.setItem("notes", JSON.stringify(updatedNotes));
//     navigate("/");
//   };

//   if (!note) return <div>Loading...</div>;

//   return (
//     <div>
//       <input value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} />
//       <textarea value={note.content} onChange={(e) => setNote({ ...note, content: e.target.value })} />
//       <button onClick={updateNote}>수정</button>
//       <button onClick={deleteNote}>삭제</button>
//     </div>
//   );
// };

// export default NoteDetail;
// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Detail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     const note = existingNotes.find((note) => note.id === Number(id));
//     if (note) {
//       setTitle(note.title);
//       setContent(note.content);
//     }
//   }, [id]);

//   const handleSaveNote = () => {
//     const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
//     const updatedNotes = existingNotes.map((note) =>
//       note.id === Number(id) ? { ...note, title, content, updatedAt: new Date().toLocaleString() } : note
//     );
//     localStorage.setItem('notes', JSON.stringify(updatedNotes));
//     navigate(-1);
//   };

//   return (
//     <div>
//       <h1>Edit Note</h1>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <textarea
//         placeholder="Content"
//         value={content}
//         onChange={(e) => setContent(e.target.value)}
//       ></textarea>
//       <button onClick={handleSaveNote}>Save</button>
//     </div>
//   );
// };

// export default Detail;
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const note = existingNotes.find((note) => note.id === Number(id));
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id]);

  const handleSaveNote = () => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = existingNotes.map((note) =>
      note.id === Number(id) ? { ...note, title, content, updatedAt: new Date().toLocaleString() } : note
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate(-1);
  };

  const handleDeleteNote = () => {
    const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = existingNotes.filter((note) => note.id !== Number(id));
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate(-1);
  };

  return (
    <div>
      <h1>Edit Note</h1>
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
      <button onClick={handleDeleteNote}>Delete</button>
    </div>
  );
};

export default Detail;
