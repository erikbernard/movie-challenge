import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { Genres } from "./pages/Genres";
import { Home } from "./pages/Home";

export function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail" component={Detail} />
        <Route exact path="/genres" component={Genres} />
        <Route exact path="*" component={Home} />
      </Switch>
    </>
  );
}
