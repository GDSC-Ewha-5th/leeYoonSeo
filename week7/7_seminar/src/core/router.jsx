// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Main from '../Screens/DrawMain';
// import Detail from '../Screens/NoteDetail';
// import Post from '../Screens/CreateNote';
// import { Profile } from 'react';
// // import About from '../Screens/About';

// function Router() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/profiles/:username" element={<Profile />} />
//         <Route path="/detail/:id" element={<Detail />} />
//         <Route path="/detail/post" element={<Post />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default Router;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Post from '../pages/Post';
import { Profile } from 'react';
// import About from '../pages/About';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="detail/*" element={<Detail />}>
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;