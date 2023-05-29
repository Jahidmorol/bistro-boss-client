import React, { useState } from "react";
import Cover from "../../sheared/cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
  return (
    <div>
      <Cover
        img={shopImg}
        title="Our Shop"
        subTitle="Whould You Like to Try Dish"
      ></Cover>
        <div className="text-center my-8">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAT</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
        </div>
    </div>
  );
};

export default Order;
