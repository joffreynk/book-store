import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Categories from './Categories';
import Books from './Books';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
