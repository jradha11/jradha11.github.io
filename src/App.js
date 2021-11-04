import './App.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

/* local imports */
import * as URLS from "./utils/AppUrls";
import HomePage from "./containers/HomePage";
import AboutMe from './containers/AboutMe';
import ContactMe from './containers/ContactMe';
import CreativeCorner from './containers/CreativeCorner';
import Work from './containers/Work';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route 
            exact
            path={URLS.HOME_PAGE}
            component = {HomePage}
          />
          <Route 
            exact
            path={URLS.ABOUT_ME}
            component = {AboutMe}
          />
          <Route 
            exact
            path={URLS.WORK}
            component = {Work}
          />
          <Route 
            exact
            path={URLS.CREATIVE_CORNER}
            component = {CreativeCorner}
          />
          <Route 
            exact
            path={URLS.CONTACT_ME}
            component = {ContactMe}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
