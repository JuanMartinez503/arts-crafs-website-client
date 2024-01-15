import HomeProducts from "../components/HomeProducts";
import trees from "../images/trees.png";
const Home = () => {
  return (
    <>
      <div className="product-container">
        <HomeProducts
          src={trees}
          price="10"
          productName="Shirts"
          link="/Shirts"
        />
        <HomeProducts
          src={trees}
          price="30-50"
          productName="Arts and Crafts"
          link="/Shirts"
        />{" "}
        <HomeProducts
          src={trees}
          price="20-30"
          productName="Signs"
          link="/signs"
        />{" "}
        <HomeProducts
          src={trees}
          price="10-40"
          productName="Special Occasions"
          link="/Shirts"
        />
      </div>
    </>
  );
};
export default Home;
