import { Routes, Route, Outlet, Link } from "react-router-dom";
import Root from '../routes/root.jsx'
import Home from '../routes/home.jsx'
import About from '../routes/about.jsx'
import NoMatch from '../routes/nomatch.jsx'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}
