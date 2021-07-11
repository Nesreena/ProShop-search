import{ Route} from "react-router";
import HomeScreen from "../Screens/Gust/HomeScreen/HomeScreen";
import Product from "../Screens/Gust/Product/Product";
import SearchPage from "../Screens/Gust/SearchPage/SearchPage";
import ShoppingCart from "../Screens/User/ShoppingCart/ShoppingCart";

export default function GuestRouter() {
  return [
    <Route key={300} path={"/"} exact={true} component={HomeScreen} />,
    <Route key={31} path={"/cart"} exact={true} component={ShoppingCart} />,
    <Route  key={32} path={"/product/:id/:name"} exact={true} component={Product} />,
    <Route  key={32}path={"/search"} exact={true} component={SearchPage} />,
  ];
}
