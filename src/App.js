import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import AuthContextProvider from "./Context/AuthContextProvider";
import Chats from './Components/Chats/Chats';

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chats} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
