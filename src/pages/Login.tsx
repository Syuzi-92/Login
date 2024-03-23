import React from "react";
import { IUser } from "../types";
import { SignupSchema } from "../validations/SignupSchema";
import { Field, Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BSForm from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (data: IUser) => {
    try {
      const response = await fetch("api.json");
      if (!response.ok) {
        throw new Error("Invalid URL address");
      }
      const responseData = await response.json();
      const user = responseData.find(
        (elm: IUser) =>
          elm.username === data.username && elm.password === data.password
      );
      if (!user) {
        throw new Error("Invalid username or password");
      }
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile", { replace: true });
    } catch (error: any) {
      toast.error(`🦄 ${error}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <ToastContainer />
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <BSForm as={Form} className="w-25 border p-2">
            <h2 className="text-success">Login</h2>
            <BSForm.Group controlId="username" className="my-2">
              <BSForm.Label>Username</BSForm.Label>
              <Field
                as={BSForm.Control}
                type="text"
                name="username"
                placeholder="Enter username"
              />
              {errors.username && touched.username ? (
                <div className="text-danger">{errors.username}</div>
              ) : null}
            </BSForm.Group>
            <BSForm.Group controlId="password" className="my-2">
              <BSForm.Label>Password</BSForm.Label>
              <Field
                as={BSForm.Control}
                type="password"
                name="password"
                placeholder="Enter password"
              />
              {errors.password && touched.password ? (
                <div className="text-danger">{errors.password}</div>
              ) : null}
            </BSForm.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </BSForm>
        )}
      </Formik>
    </div>
  );
}
export default React.memo(Login);
