
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Post from '../pages/Post';
import { Profile } from 'react';


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