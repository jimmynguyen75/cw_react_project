import './App.less';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Footer from './components/Footer';
import Event from './components/event/Event'
import Contest from './components/contest/Contest';
import AboutUs from './components/about/AboutUs';
import TermOfUse from './components/info/TermOfUse';
import PrivacyStatement from './components/info/PrivacyStatement';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/trang-chu" exact component={Home} />
          <Route path="/su-kien" exact component={Event} />
          <Route path="/cuoc-thi" exact component={Contest} />
          <Route path="/ve-chung-toi" exact component={AboutUs} />
          <Route path="/dieu-khoan-su-dung" exact component={TermOfUse} />
          <Route path="/chinh-sach-bao-mat" exact component={PrivacyStatement} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
