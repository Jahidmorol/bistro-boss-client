import SectionTitle from "../../../component/sectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../sheared/menuItem/MenuItem";

const PopulerMenu = () => {
  const [menu] = useMenu();
    const popularItems = menu.filter((item) => item.category === "popular");
  console.log(menu);
  return (
    <div className="my-20">
      <SectionTitle
        subTitle="Check it out"
        title="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {popularItems.map((menuItem) => (
          <MenuItem key={menuItem._id} item={menuItem}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-outline border-0 border-b-4">View Full  Menu</button>
      </div>
    </div>
  );
};

export default PopulerMenu;
