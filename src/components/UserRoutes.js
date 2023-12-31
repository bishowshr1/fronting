import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserRoutes = () => {

  const { userInfo } = useSelector((store) => store.userInfo);
  return userInfo === null ? <Navigate to='/user/login' replace /> : userInfo.isAdmin ? <Navigate to='/' replace /> : <Outlet />
}
export default UserRoutes