import AktivityItem from "./AktivityItem";
import { Activity } from "../../App";

function AktivityList({ ActivityArray }: { ActivityArray: Activity[] }) {
  console.log("props from Aside", ActivityArray);
  return (
    <section>
      <h4>Sparade Aktiviteter</h4>
      <section>
        {ActivityArray.map((Activity) => (
          <AktivityItem key={Activity.id} {...Activity} />
        ))}
      </section>
    </section>
  );
}

export default AktivityList;
