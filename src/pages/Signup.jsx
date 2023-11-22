import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Join the millions  to Save shope with Arcade for free"
      description1="It is more than just sells "
      description2="The Ecommerece for every Niche"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
