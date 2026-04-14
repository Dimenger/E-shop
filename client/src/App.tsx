import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { Layout } from "./widgets/layout/layout";
import { Home } from "./pages/home/home";
import { ErrorPage } from "./pages/error-page/error-page";
import { LoaderSpinner } from "./shared/ui/loader-spinner";
import { SinglePhasePage } from "./pages/single-phase-page/single-phase-page";
import { ThreePhasePage } from "./pages/three-phase-page/three-phase-page";
import { getSinglePhaseLoader } from "./entities/electro-panels/loaders/getSinglePhase.loader";
import { getThreePhaseLoader } from "./entities/electro-panels/loaders/getThreePhase.loader";

// import styles from "./App.module.css";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "single-phase",
        element: <SinglePhasePage />,
        loader: getSinglePhaseLoader,
        HydrateFallback: LoaderSpinner,
      },
      {
        path: "three-phase",
        element: <ThreePhasePage />,
        loader: getThreePhaseLoader,
        HydrateFallback: LoaderSpinner,
      },
    ],
  },
] satisfies RouteObject[];

const router = createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router} />;
};

// Использование createBrowserRouter открывает вам доступ к мощным хукам (useNavigation, useLocation, useRouteError), даже если вы пока не используете loader.
