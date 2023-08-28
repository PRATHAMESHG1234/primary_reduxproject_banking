import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import store from './store';
function App() {
  
  return (
    <>
    <Provider store={store}>
    <div className="App">
    <Navbar />
    </div>
    </Provider>
    </>
  );
}

export default App;
