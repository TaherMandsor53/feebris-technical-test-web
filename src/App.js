import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorHandleComponent from './components/errorHandleComponent/ErrorHandleComponent';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import Store from './store/Store';

function App() {
  const urlPath = window.location.pathname;
  let isFlag = 0;
  if (urlPath === '/') {
    isFlag = 1;
  }
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          {isFlag === 1 ? (
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={urlPath} element={<ErrorHandleComponent />} />
            </Routes>
          )}
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
