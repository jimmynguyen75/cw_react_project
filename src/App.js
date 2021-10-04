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
import Categories from './components/category/Categories';
import EventPost from './components/event/EventPost';
import ViewCategory from './components/category/ViewCategory';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/su-kien" exact component={Event} />
          <Route path="/su-kien/:title?/:id?" exact component={EventPost} />
          <Route path="/cuoc-thi" exact component={Contest} />
          <Route path="/ve-chung-toi" exact component={AboutUs} />
          <Route path="/dieu-khoan-su-dung" exact component={TermOfUse} />
          <Route path="/chinh-sach-bao-mat" exact component={PrivacyStatement} />
          <Route path="/tin-xe" exact component={Categories} />
          <Route path="/tin-phu-kien" exact component={Categories} />
          <Route path="/tin-su-kien" exact component={Categories} />
          <Route path="/tin-cuoc-thi" exact component={Categories} />
          <Route path="/:title?" exact component={ViewCategory} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
