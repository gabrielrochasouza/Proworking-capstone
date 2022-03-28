import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ServicesPage from "../pages/ServicesPage";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Register from "../pages/Register";
import AboutUs from "../pages/AboutUs";
import ServiceProfilePage from "../pages/ServiceProfilePage";
import SearchResults from "../pages/SearchResult";
import DashboardHomePage from "../pages/Dashboard/InitialPage";
import ChatPage from "../pages/ChatPage";
import AllChatsPage from "../pages/AllChats";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/chat" component={ChatPage} />

            <Route
                exact
                path={`/services/:id/:name`}
                component={ServiceProfilePage}
            />
            <Route exact path={`/services/:search`} component={SearchResults} />

      <Route exact path="/dashboard" component={DashboardHomePage} />
      <Route exact path="/dashboard/all-chats" component={AllChatsPage} />

      <Route exact path="/dashboard/service-register" component={Dashboard} />

      <Route exact path="/dashboard" component={DashboardHomePage} />

      <Route exact path="/dashboard/service-register" component={Dashboard} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
