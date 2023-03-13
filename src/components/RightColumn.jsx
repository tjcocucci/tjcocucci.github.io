import { Outlet } from "react-router-dom";

export default function RightColumn() {
  return (
    <div className="rightcolumn">
      <div className="terminal-card">
        <Outlet />
      </div>
    </div>
  );
}
