import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import CreateBook from './components/CreateBook'
import ShowBookList from './components/ShowBookList'
import ShowBookDetails from './components/ShowBookDetails'
import UpdateBookInfo from './components/UpdateBookInfo'


const App = () =>{
  return(
    <Router>
        <div>
          {/* Defining all our routes. for a specific path definition, its corresponding component will be rendered */}
          <Route exact path= '/' component={ShowBookList} />
          <Route path='/create-book' component={CreateBook} />
          <Route path='edit-book/:id' component={UpdateBookInfo} />
          <Route path='/show-book/:id' component={ShowBookDetails} />
        </div>
      </Router>
  )
}


// class App extends Component{
//   render(){
//     return(
      
//     )
//   }
// }

export default App;
