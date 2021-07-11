import{ Route} from "react-router";
import LoginPage from "../Screens/User/LoginPage/LoginPage";
import Register from "../Screens/Gust/RegisterPage/Register";

export default function AuthRouter() {
    return (
        [
            <Route
              path={"/loginPage"}
              component={() => {
                return <LoginPage />;
              }}
            />,

            <Route
              path={"/register"}
              component={() => {
                return <Register />;
              }}
            />
        ]
    )
}
