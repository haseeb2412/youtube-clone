
import './App.css';
import Header from './components/Header/Header';
import RecommendedVideos from './components/Recommended/RecommendedVideos';
import SearchPage from './components/Header/SearchPage';
import Sidebar from './components/Sidebar/Sidebar';
// import {Routes,Route} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Switch>
          
          {/* page number 01 */}
          <Route path="/search/:searchTerm">
              <div className="app_page">
                <Sidebar />
                <SearchPage/>
              </div>
          </Route>
          {/* page number 02 */}
          <Route path="/">
              <div className="app_page">
                <Sidebar />
                <RecommendedVideos/>
              </div>
            </Route>


        </Switch>

      </Router>
      
      {/* header */}

      {/* <Header/>
      <div className='app_page'>
        <Sidebar/>
        <RecommendedVideos/>
      </div> */}
    </div>
  );
}

export default App;
