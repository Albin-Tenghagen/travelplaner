import FormHeading from "./FormHeading";
import UserForm from "./UserForm";

function Main(props) {
  const { createActivity } = props;

  return (
    <main>
      <h2>Main</h2>
      <FormHeading />
      <UserForm createActivity={createActivity} />
    </main>
  );
}

export default Main;
