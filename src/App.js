import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Categories from './Categories';
import Books from './component/Books';
import Form from './component/Form';
import Header from './component/Header';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'action',
    completed: 64,
    chapiter: 'chapiter 17',
  },
  {
    id: 1,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    completed: 8,
    chapiter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 1,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    completed: 0,
    chapiter: 'Introduction',
  },
];

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books books={books} />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
      <Form />
    </div>
  );
}

export default App;
