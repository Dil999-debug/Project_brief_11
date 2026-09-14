import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Dashboard() {
  return (
    <div>
      <PageTitle title="Dashboard" />

      <Card
        title="Financial Overview"
        description="View your income, expenses and budget summary."
      />

      <Button text="View Expenses" />
    </div>
  );
}

export default Dashboard;