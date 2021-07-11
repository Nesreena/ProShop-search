import{ Route} from "react-router";
import Payment from '../Screens/User/Payment/Payment'
import Profile from '../Screens/User/Profile/Profile'
import ShoppingCart from '../Screens/User/ShoppingCart/ShoppingCart'
import UpdateProfilePage from '../Screens/User/UpdateProfilePage/UpdateProfilePage'

export default function UserRouter() {
    return (
        [
        <Route key={54} path={"/profile"} exact={true} component={Profile} />,
        <Route
        key={55}
          path={"/update-profile"}
          exact={true}
          component={UpdateProfilePage}
        />,
        <Route
        key={405}
          path={"/proceed-checkout/shipping-address"}
          exact={true}
          component={Payment}
        />,
        <Route
        key={402}
          path={"/proceed-checkout/place-order"}
          exact={true}
          component={Payment}
        />,]
    )
}
