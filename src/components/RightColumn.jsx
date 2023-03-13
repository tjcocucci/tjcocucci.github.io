import { Outlet } from 'react-router-dom';
import Card from './Card';

export default function RightColumn() {
  return (
    <div className="rightcolumn">
        <Outlet />
    </div>
  );
}
