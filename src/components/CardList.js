import React from "react";
import Card from "./Card";

function CardList() {
  const data = [
    {
      id: 1,
      name: "Kathmandu Upateyka",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Kupondole, Lalitpur, PO BOX: 1232",
    },
    {
      id: 2,
      name: "Purba Nepal",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Itahari, Sunsari, PO BOX: 1232",
    },
    {
      id: 3,
      name: "Pachim Nepal",
      mail: "hello@rpanp.com",
      phone: "+977 9843777722",
      location: "Butwal, Rupandehi, PO BOX: 1232",
    },
  ];

  return (
    <div>
      <Card items={data}></Card>
    </div>
  );
}

export default CardList;
