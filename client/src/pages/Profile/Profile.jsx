import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <div className="card-container">
        <Card
          title="User Profile"
          description="View your profile information."
        />

        <Card
          title="Account Settings"
          description="Manage your account settings."
        />
      </div>

      <Button text="Edit Profile" />
    </div>
  );
}

export default Profile;