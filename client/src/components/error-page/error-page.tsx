import { useRouteError, isRouteErrorResponse } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  // Проверка, является ли ошибка ответом от роутера (например, 404)
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : "Unknown error";

  return <div>Oops! {message}</div>;
};
