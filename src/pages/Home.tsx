import {
  Hero,
  TopSellers,
  OperatingHours,
  Reviews,
  Location,
  DeliverySuburbs,
} from "../components";

const Home = () => {
  return (
    <div>
      <Hero />
      <TopSellers />
      <OperatingHours />
      <div id="reviews">
        <Reviews />
      </div>
      <div id="locations">
        <Location />
      </div>
      <DeliverySuburbs />
    </div>
  );
};

export default Home;
