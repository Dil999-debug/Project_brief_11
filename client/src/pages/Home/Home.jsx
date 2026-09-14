import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Home() {
  return (
    <div>
      <PageTitle title="Home" />

      <Card
        title="Welcome to Expense Tracker"
        description="Manage your income, expenses and budget easily."
      />

      <Button text="Get Started" />
    </div>
  );
}

export default Home;