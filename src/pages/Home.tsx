import React, { useContext, useMemo, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { IOutletContextType } from "../types";

function Home() {
  const { user } = useOutletContext<IOutletContextType>();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <>
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671163.jpg?w=826&t=st=1711112664~exp=1711113264~hmac=f8ea2d9bba6c1c8cbfbf276e6d1e54088079f361a6455ef0a6e81483c0d81a58"
        />
        <Card.Title>
          <strong>My Name is</strong> - {user.username}
        </Card.Title>
        <Card.Text>
          <h3 className="text-warning">Wish me good luck</h3>
        </Card.Text>
        <Button variant="danger" onClick={logout}>
          Log out
        </Button>
      </Card>
    </>
  );
}
export default React.memo(Home);
