import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.min.css';
import AppRoutes from './components/AppRoutes';
import Menu from './containers/Menu';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
