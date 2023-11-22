import loginImg from "../assets/Images/login.webp"

import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Save Money Shop More  for today, tomorrow, and beyond."
      description2="Go ahead"
      image={loginImg}
      formType="login"
    />
    
  )
}

export default Login
