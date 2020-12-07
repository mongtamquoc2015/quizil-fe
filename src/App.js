import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameCenter from "./pages/GameCenter";
import Home from "./pages/Home";
import Summary from "./pages/Summary";
import { GlobalProvider } from "./providers/global";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/play" component={GameCenter} />
          <Route path="/summary" component={Summary} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
