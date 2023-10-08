import FormSection from "../../components/Signup/FormSection";
import InformationSection from "../../components/Signup/InformationSection";
import Container from "../../components/Signup/SignupContainer";

const Signup = () => {
  return (
    
    <Container>
      {/* Information Section */}
      <InformationSection/>

      {/* Signup Form Section */}
        <FormSection/>      
    </Container>

  )
};

export default Signup;
