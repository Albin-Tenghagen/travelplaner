import AktivityList from "./AktivityList";
import { Activity } from "../../App";
// The Aside component that displays a list of activities.
// * @param {Object} props - The props object.
// * @param {Activity[]} props.ActivityArray - Array of activity objects to display

function Aside({ ActivityArray }: { ActivityArray: Activity[] }) {
  console.log("Aside Array", ActivityArray);
  return (
    <section>
      {/* Pass the ActivityArray to the AktivityList component */}
      <AktivityList ActivityArray={ActivityArray} />
    </section>
  );
}

export default Aside;
