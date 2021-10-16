import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import TodoPage from "./components/pages/TodoPage";
import AddTodoPage from "./components/pages/AddTodoPage";

const App = () => {
  const loginType = useSelector((state) => state.loginType);
  const isLogin = useSelector((state) => state.isUserLogin);
  console.log(isLogin);
  return (
    <>
      <ThemeProvider theme={theme}>
        {isLogin?.authen ? (
          <BrowserRouter>
            <HeaderComponent />
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/todo" exact component={TodoPage} />
            <Route path="/addtodo" exact component={AddTodoPage} />
            <Route path="/profile" exact component={ProfilePage} />
          </BrowserRouter>
        ) : loginType === "LogIn" ? (
          <LoginComponent />
        ) : (
          <RegisterComponent />
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
