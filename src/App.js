import './App.less';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import Event from './components/event/Event'
import Contest from './components/contest/Contest';
import News from './components/news/News';
import AboutUs from './components/about/AboutUs';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/event" exact component={Event} />
          <Route path="/contest" exact component={Contest} />
          <Route path="/news" exact component={News} />
          <Route path="/about" exact component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
