import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import UserListPage from "./pages/UserListPage/UserListPage";
import UserProfilePage from "./pages/UserProfilePage/UserProfilePage";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import PostsPage from "./pages/PostsPage/PostsPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import BaseLayout from "./layouts/BaseLayout/BaseLayout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/users" component={UserListPage} />
            <Route exact path="/users/:id" component={UserProfilePage} />
            <Route path="/users/:id/posts" component={PostsPage} />
            <Route path="/users/:id/todos" component={TodosPage} />
          </Switch>
        </BaseLayout>
        <Footer></Footer>
      </BrowserRouter>
    );
  }
}

export default App;
