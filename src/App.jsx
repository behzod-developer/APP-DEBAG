import { Route, Routes } from 'react-router-dom';
import Login from './Views/Auth/Login';
import Main from './Views/Main/Main';
import { createContext, useState } from 'react';
import SignUp from './Views/Auth/SignUp';
import VerifyCode from './Views/Auth/VerifyCode';
import Register from './Views/Auth/Register';
import Dashboard from './Views/Dashboard/Dashboard';


export const Context = createContext()

const App = () => {

  const [login, setLogin] = useState(false)

  const [data_user, setDataUser] = useState()

  return (
    <Context.Provider value={{ login, setLogin, data_user, setDataUser }}>
      <Routes>

        <Route path="login" element={<Login />} />
        <Route path="singup" element={<SignUp />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route path="register" element={<Register />} />
        <Route path='/' element={<Main />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </Context.Provider>
  );
};

export default App;