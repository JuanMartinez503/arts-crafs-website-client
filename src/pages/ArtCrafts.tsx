import OtherProducts from "../components/OtherProducts";
import tress from "../images/trees.png";

const ArtCrafts = () => {
  return (
    <>
      <h1 className="main-title">Title for arts and crafts</h1>
      <p className="main-description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus
        reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis
        expedita accusantium? Aspernatur.
      </p>
      <div className="other-products-container">
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />{" "}
        <OtherProducts
          src={tress}
          name="Here is the name"
          description="orem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo harum magni aliquid ab omnis sapiente voluptates dolor fugiat possimus reprehenderit saepe quo deserunt provident nisi incidunt, reiciendis expedita accu"
        />
      </div>
    </>
  );
};
export default ArtCrafts;
