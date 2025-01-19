import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Aside from "./components/Aside/Aside";

import "./App.css";

function App() {
  // Initialize an empty array for activities
  const ActivityArray = [
    {
      id: 1,
      name: "Albin",
      description: "string;",
      location: "string",
      date: "string",
    },
    {
      id: 2,
      name: "Albin",
      description: "string;",
      location: "string",
      date: "string",
    },
  ];

  // Function to create and add a new activity to the ActivityArray
  function createActivity(newActivity: {
    name: string;
    description: string;
    location: string;
    date: string;
  }) {
    // Create a new activity object with an ID (based on the current length of ActivityArray)
    const Activity: Activity = {
      id: ActivityArray.length + 1,
      name: newActivity.name,
      description: newActivity.description,
      date: newActivity.date,
      location: newActivity.location,
    };

    // Push the new activity into the array
    ActivityArray.push(Activity);

    console.log("Activity created", Activity);
    console.log("Array updated", ActivityArray);
  }
  // Render the app with a header, main content, aside section, and footer
  return (
    <>
      <Header />
      <Main createActivity={createActivity} />
      <Aside ActivityArray={ActivityArray} />
      <Footer />
    </>
  );
}
// Activity interface to outline the Activity object, it was moved outside the function App to be exportable to Aside
export interface Activity {
  id: number;
  name: string;
  description?: string;
  date: string;
  location: string;
}
export default App;
