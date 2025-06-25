import { ROUTES } from "app/routes";
import { Link } from "react-router";

export const Auth = () => (
  <div>
    <p>Auth</p>
    <Link to={ROUTES.sessions}>To sessions</Link>
  </div>
);
