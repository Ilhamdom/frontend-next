import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import { createElement } from "react";

export default function LoginPage() {
  return createElement(AuthLayout, null, createElement(LoginForm));
}