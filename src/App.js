import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';

import Navbar from './layouts/BaseLayout/BaseLayout';

import UserListPage from './pages/UserListPage/UserListPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import PostsPage from './pages/PostsPage/PostsPage';
import BaseLayout from './layouts/BaseLayout/BaseLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/user" component={UserListPage} />
            <Route path="/user/:id" component={UserProfilePage} />
            <Route path="/post" component={PostsPage} />
          </Switch>

        </BaseLayout>
        <Footer></Footer>

      </BrowserRouter>

    );
  }
}

export default App;
