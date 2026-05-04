
import Banner from "./components/Banner";
import FeaturedTilesPage from "./components/FeaturedTiles";
import Marquee from './components/marquee/page.jsx';

export default function Home() {
  return (
    
    <div className="mt-5">
  <Marquee />
  <Banner />
  <FeaturedTilesPage/>
</div>
  );
}
