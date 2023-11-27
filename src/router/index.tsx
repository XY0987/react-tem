import { RouteObject } from "react-router";
import NotAuth from "../components/auth/NotAuth";
import NotPower from "../pages/error/NotPower";
import NotFound from "../pages/error/NotFount";
import defaultRoutes from "./default";

const routes: RouteObject[] = [
  ...defaultRoutes,
  {
    path: "/NotHasPower",
    element: <NotAuth title="403" Element={NotPower}></NotAuth>,
  },
  {
    path: "*",
    element: <NotAuth title="404" Element={NotFound}></NotAuth>,
  },
];

export default routes;
