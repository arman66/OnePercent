import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './screens/Login'
import Register from './screens/Register'
import Habit from './screens/Habits'
import HabitList from './screens/HabitList'
import Home from './screens/Home'



const App = () => {
  return (
   <Router>
   <Header/>
   
   <main className="py-4">
     <Container>
     <Route exact path='/' component={Home} />
     <Route exact path='/' component={HabitList} />
     <Route exact path='/list' component={HabitList} />
     <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    

     </Container>
   </main>
   <Footer/>
   </Router>
  );
}

export default App;
