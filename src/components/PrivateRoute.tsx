import React, { useEffect, useState } from "react";
import { IUser } from "../types";
import { Outlet, useNavigate } from "react-router-dom";

function PrivateRoute() {
  const [user, setUser] = useState<IUser>({} as IUser);
  const navigate = useNavigate();
  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);
      navigate("/profile", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <Outlet context={{ user }} />
    </>
  );
}
export default React.memo(PrivateRoute);
