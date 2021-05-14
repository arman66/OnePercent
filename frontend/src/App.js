import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './screens/Login'
import Register from './screens/Register'

const App = () => {
  return (
   <Router>
   <Header/>
   <main className="py-4">
     <Container>
     <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    

     </Container>
   </main>
   <Footer/>
   </Router>
  );
}

export default App;
