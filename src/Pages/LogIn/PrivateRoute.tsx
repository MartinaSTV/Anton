import { Navigate, Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import Token from "../../atoms/Token";

const ProtectedRoutes = () => {
  const [token] = useRecoilState(Token);
  console.log(token, "protected");
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
