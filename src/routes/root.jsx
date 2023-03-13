import NavigationBar from "../components/NavigationBar.jsx";
import LeftColumn from "../components/LeftColumn.jsx";
import RightColumn from "../components/RightColumn.jsx";

export default function Root() {
  return (
    <div>
      <NavigationBar />
      <LeftColumn />
      <RightColumn />
    </div>
  );
}
