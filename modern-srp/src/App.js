import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import './App.scss';
import SRP from './Containers/SRP/SRP';
import PrivacyPolicy from './Containers/PrviacyPolicy/PrivacyPolicy';
import TextEditor from './Containers/TextEditor/TextEditor';
import ScrollToTop from '../src/Components/ScrollToTop/ScrollToTop';

function App() {
  let routes = (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/text-editor" component={TextEditor} />
          <Route path="/" exact component={SRP} />
          <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
