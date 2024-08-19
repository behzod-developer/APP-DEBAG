import { Route, Routes } from 'react-router-dom';
import Login from './Views/Auth/Login';
import Main from './Views/Main/Main';
import { createContext, useState } from 'react';


export const Context = createContext()

const App = () => {

  const [login, setLogin] = useState(false)

  return (
    <Context.Provider value={{ login, setLogin }}>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;