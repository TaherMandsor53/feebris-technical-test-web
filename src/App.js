import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorHandleComponent from './components/errorHandleComponent/ErrorHandleComponent';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import Store from './store/Store';
import PatientDetails from './components/home/PatitentDetails';

function App() {
  const urlPath = window.location.pathname;
  console.log({ urlPath });
  let isFlag = 0;
  if (urlPath === '/' || urlPath.indexOf('/patients/') > -1) {
    isFlag = 1;
  }
  console.log({ isFlag });
  console.log(urlPath.indexOf('/patients/') > -1);
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          {isFlag === 1 ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patients/:id" element={<PatientDetails />} />
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
