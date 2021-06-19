import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndexPage from "./Pages/IndexPage";
import GodTemplate from "./Pages/GodTemplate";
import FallbackPage from "./Pages/FallbackPage";

function App() {
  return (
    <Router>
      <div className="App _position-relative">
        <Switch>
          <Route path="/gods/:godName">
            <GodTemplate />
          </Route>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route>
            <FallbackPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
