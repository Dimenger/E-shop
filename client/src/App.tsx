import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { Layout } from "./components/layout/layout";
import { MainPage } from "./components/main-page/main-page";
import { Electro } from "./components/electro/electro";
import { ErrorPage } from "./components/error-page/error-page";
import { electroLoader } from "./routes/electroLoader";
import { LoaderSpinner } from "./components/ui/loader-spinner";

// import styles from "./App.module.css";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: "electro",
        element: <Electro />,
        loader: electroLoader,
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
