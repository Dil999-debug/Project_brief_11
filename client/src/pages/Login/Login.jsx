import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Login() {
  return (
    <div>
      <PageTitle title="Login" />

      <div className="card-container">
        <Card
          title="Welcome Back"
          description="Login to access your expense tracker account."
        />
      </div>

      <Button text="Login" />
    </div>
  );
}

export default Login;