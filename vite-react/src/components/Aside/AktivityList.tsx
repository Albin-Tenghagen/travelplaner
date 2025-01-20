import AktivityItem from "./AktivityItem";
import { Activity } from "../../App";
// The AktivityList component that renders a list of activity items.
// * @param {Object} props - The props object.
// * @param {Activity[]} props.ActivityArray - Array of activity objects to display.

function AktivityList({ ActivityArray }: { ActivityArray: Activity[] }) {
  console.log("props from Aside", ActivityArray);
  return (
    <section>
      <h3>Sparade Aktiviteter</h3>
      <section>
        {/* Render each activity as an AktivityItem component */}
        {ActivityArray.map((Activity) => (
          <AktivityItem key={Activity.id} {...Activity} />
        ))}
      </section>
    </section>
  );
}

export default AktivityList;
