import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import classnames from "classnames";
import ClientClassCard from "./ClientClassCard";
import ClientClassEditCard from "./ClientClassEditCard";


function ClientClassCardContainer() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
      
    <Container className="mt-4">
      <Nav tabs className="mb-4">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Open Classes
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            My Classes
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        {/* <SearchForm /> */}
          <ClientClassCard toggle={toggle}/>
        </TabPane>
        <TabPane tabId="2">
          <ClientClassEditCard/>
        </TabPane>
      </TabContent>
    </Container>
  );
}

export default ClientClassCardContainer;
