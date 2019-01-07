import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'

//  Components
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile'
import PostItem from './components/post_item'
import Lifecycle from './components/lifecycle'
import Conditional from './components/conditional'
import User from './components/user'



const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                   <NavLink to="/">Home</NavLink><br/>
                   <NavLink
                    to="/posts"
                    activeStyle={{color:'red'}}
                    activeClassName="selected"
                    >Posts</NavLink><br/>
                   <NavLink to={{ 
                       pathname:'/profile'
                    }}>Profile</NavLink><br/>
                    <NavLink to="/life">Life</NavLink><br/>
                    <NavLink to="/conditional">Conditional</NavLink><br/>
                    <NavLink to="/user">User</NavLink><br/>
                   <hr/>
                </header>
                <Switch>
                    <Route path="/posts/:id" component={PostItem}/>
                    <Route path="/posts" component={Posts}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/life" component={Lifecycle}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/user" component={User}/>
                    <Route path="/" exact component={Home}/>
                    {/* <Route component={NotFound}/> */}
                </Switch>
            </div>
        </BrowserRouter>
    );
}

ReactDOM.render(
    <App/>, document.querySelector('#root')
)