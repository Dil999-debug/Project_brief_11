import { useState } from "react";
import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Dashboard() {
const [count, setCount] = useState(0);
const [name, setName] = useState("");
  return (
    <div>
      <PageTitle title="Dashboard" />
      <p>Notifications: {count}</p>
      <input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

{name ? <p>Hello, {name}</p> : <p>Please enter your name</p>}

      <div className="card-container">
        <Card
          title="Total Income"
          description="View your total income."
        />

        <Card
          title="Total Expenses"
          description="View your total expenses."
        />

        <Card
          title="Budget"
          description="View your current budget."
        />
      </div>

      <Button
  text="Add Notification"
  onClick={() => setCount(count + 1)}
/>
    </div>
  );
}

export default Dashboard;