import { LandingPage, Login, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>

      <LandingPage/>
 
    </div>
  );
}
