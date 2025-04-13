import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import { ThemeContext } from "./components/Theme";
import { useContext } from 'react';

/* local imports */
import * as URLS from "./utils/AppUrls";
import HomePage from "./containers/HomePage";
import AboutMe from './containers/AboutMe';
import ContactMe from './containers/ContactMe';
import CreativeCorner from './containers/CreativeCorner';
import Work from './containers/Work';

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route 
            exact
            path={URLS.HOME_PAGE}
            element = {<HomePage/>}
          />
          <Route 
            exact
            path={URLS.ABOUT_ME}
            element = {<AboutMe/>}
          />
          <Route 
            exact
            path={URLS.WORK}
            element = {<Work/>}
          />
          <Route 
            exact
            path={URLS.CREATIVE_CORNER}
            element = {<CreativeCorner/>}
          />
          <Route 
            exact
            path={URLS.CONTACT_ME}
            element = {<ContactMe/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
