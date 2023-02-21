import { Routes, Route, Outlet } from 'react-router-dom';
import Root from '../routes/root.jsx';
import Home from '../routes/home.jsx';
import About from '../routes/about.jsx';
import NoMatch from '../routes/nomatch.jsx';
import Portfolio from '../routes/portfolio.jsx';
import Interests from '../routes/interests.jsx';
import PortfolioItem from '../routes/portfolioItem.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Outlet />}>
          <Route index element={<Portfolio />} />
          <Route path="academic" element={<PortfolioItem item="academic" />} />
          <Route path="unity" element={<PortfolioItem item="unity" />} />
          <Route path="web" element={<PortfolioItem item="web" />} />
        </Route>
        <Route path="interests" element={<Interests />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
