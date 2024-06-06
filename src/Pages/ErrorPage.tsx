import { useRouteError } from "react-router-dom";
import { routeError } from "../utils/types";

const ErrorPage = () => {
    const error = useRouteError() as routeError;
    console.error(error);
  return (
    <div className="w-screen h-screen text-center flex flex-col py-10 gap-y-10 justify-center">
      <h1 className="text-2xl font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="font-mono text-xl font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage