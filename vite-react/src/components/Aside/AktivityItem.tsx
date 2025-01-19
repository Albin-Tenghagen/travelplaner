import { Activity } from "../../App";

function AktivityItem({ name, description, date, location }: Activity) {
  return (
    <article>
      <h4>{name}</h4>
      <p>{location}</p>
      <p>{description}</p>
      <p>{date}</p>
    </article>
  );
}

export default AktivityItem;
