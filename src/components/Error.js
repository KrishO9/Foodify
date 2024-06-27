import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  );
};

export default Error;
