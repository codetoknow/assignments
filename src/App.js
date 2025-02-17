// import DisplayTextAssignment from "./DisplayTextAssignment";
// import EmployeeDetailsAssignment from "./EmployeeDetailsAssignment";
// import RegistrationFormAssignment from "./RegistrationFormAssignment";
import PersonalDetails from "./PersonalDetails";

const App = () => {
  const personalDetails = ({
    name: "John Doe",
    age: 25
  })

  return (
    // <DisplayTextAssignment />
    // <EmployeeDetailsAssignment />
    // <RegistrationFormAssignment />
    <PersonalDetails personalDetails={personalDetails} />
  );
}

export default App;
