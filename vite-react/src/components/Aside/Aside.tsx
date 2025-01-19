import AktivityList from "./AktivityList";
import { Activity } from "../../App";
function Aside({ ActivityArray }: { ActivityArray: Activity[] }) {
  console.log("Aside Array", ActivityArray);
  return (
    <section>
      <h3>Aside</h3>
      <AktivityList ActivityArray={ActivityArray} />
    </section>
  );
}

export default Aside;
