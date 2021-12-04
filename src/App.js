
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Weathercontent from './components/weatherforecast/weathercontent/Weathercontent';

//HOC
function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component /* history={props.history} */ {...props} />
        </Layout>
      )}
    />
  );
}

function App() {
  return (
    <div className="App">
       {/* <Layout/> */}
       <Router>
        <Switch>
          <RouteWrapper
            path="/"
            component={Weathercontent}
            layout={Layout}
            exact
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
