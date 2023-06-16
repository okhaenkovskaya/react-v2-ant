import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>404 Page</h1>
      <Button onClick={() =>  navigate("/")} type="primary">home</Button>
    </div>
  );
};

export default ErrorPage;
