/**
 * This file contains all the routes for the react application
 * */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HotPage from '@/HotPage/hot_page';
import PostDetailsPage from '@/PostDetails/post_details';
import CreatePost from '@/CreatePost/create_post';
import LoginPage from '@/LoginPage/login_page';
import LogoutPage from '@/LogoutPage/logout_page';
import RegisterPage from '@/RegisterPage/register_page';
import ResetPage from '@/ResetPage/reset_page';
import ForgotPage from '@/ForgotPage/forgot_page';

class Routes extends React.Component {
  // enter all routes for the application here
  render () {
    return (
      <Switch>
        <Route exact path="/" component={HotPage}/>
        <Route path="/create" component={CreatePost}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/logout" component={LogoutPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/forgot" component={ForgotPage}/>
        <Route path="/reset/:id" component={ResetPage}/>
        <Route path="/post/:id" component={PostDetailsPage}/>
      </Switch>
    );
  }
}

export default Routes;
