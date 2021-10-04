import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';

function App() {
  return (
  <Router>
    <Header></Header>
    <Footer></Footer>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route path="/blogs">
        <Blogs></Blogs>
      </Route>
      <Route path="/*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
