import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TablePosts from './components/TableUsers'
import TableUsers from './components/TablePosts'
import Loader from "./components/Loader";
import Axios from 'axios'

class App extends React.Component {
  //initializing the state
  state = {
    isLoading: true,
    users: null,
    posts: null,
    };
  async componentDidMount() {
    //pulling the users data from the fake api
    const users = await Axios.get(      
      "https://jsonplaceholder.typicode.com/users"
    );
    //pulling the posts data from the fake api
    const posts = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    //setting the state to a newer condition where it now possesses the pulled out data
    this.setState({
      isLoading: false,
      users: users.data,
      posts: posts.data,
    });
  }
  

  render() {
    return this.state.isLoading ? 
    //checking if the 'isLoading' flag is true or not. If true, then show the loading animation,
    //if not, then show the content.
      
        (<div>
          <Loader/>
          </div>)
        :
        (<div className='ui container'>
          <TableUsers user={this.state.users}/>
          <TablePosts userposts={this.state.posts} />
        </div>
        );
  }
}   

        



ReactDOM.render(<App />, document.getElementById("root"));
