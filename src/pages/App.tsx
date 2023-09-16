import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './index';
import Item1Page from './item1';

function App() {
  return (
    <Router>
      <switch>
        <Route path={'/'} element={<Home />} />
        <Route path="/item1Page/" element={<Item1Page />} />
      </switch>
    </Router>
  );
}
export default App;
