import React from "react";
import ClientClassCardContainer from "../client/ClientClassCardContainer";
import Navigation from "../Header";

function ClientDashboard() {
  return (
    <div>
      <Navigation classes={true} logout={true}/>
      <ClientClassCardContainer />
    </div>
  )
  
}

export default ClientDashboard;
