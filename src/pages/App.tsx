import { Route, BrowserRouter as Router } from 'react-router-dom';
import Item1Page from '../compornents/item1';

function App() {
  return (
    <Router>
      <switch>
        <Route path="/item1" Component={Item1Page} />
      </switch>
    </Router>
  );
}
export default App;
