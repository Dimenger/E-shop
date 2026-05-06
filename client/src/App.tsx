import { singlePhaseLoader } from "@/app/router/loaders/singlePhase.loader";
import { threePhaseLoader } from "@/app/router/loaders/threePhase.loader";
import { Contacts } from "@/pages/contacts/contacts";
import { Panels } from "@/pages/panels/panels";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { Areas } from "./pages/areas/areas";
import { ErrorPage } from "./pages/error-page/error-page";
import { Home } from "./pages/home/home";
import { News } from "./pages/news/news";
import { SinglePhasePage } from "./pages/single-phase-page/single-phase-page";
import { ThreePhasePage } from "./pages/three-phase-page/three-phase-page";
import { LoaderSpinner } from "./shared/ui/loader-spinner";
import { Layout } from "./widgets/layout/layout";

// import styles from "./App.module.css";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacts", element: <Contacts /> },
      { path: "panels", element: <Panels /> },
      { path: "areas", element: <Areas /> },
      { path: "news", element: <News /> },
      {
        path: "single-phase",
        element: <SinglePhasePage />,
        loader: singlePhaseLoader,
        HydrateFallback: LoaderSpinner,
      },
      {
        path: "three-phase",
        element: <ThreePhasePage />,
        loader: threePhaseLoader,
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
