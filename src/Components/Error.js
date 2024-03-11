import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>Oops!! Page Not Found</h1>
      <h3>{status}</h3>
      <p>{statusText}</p>
    </div>
  );
};

export default Error;
