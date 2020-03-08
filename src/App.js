import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"


export default () => (
  <>
    <Route render={props => <NavBar {...props} />} />
    <Route render={props => <ApplicationViews {...props} />} />

  </>
)


