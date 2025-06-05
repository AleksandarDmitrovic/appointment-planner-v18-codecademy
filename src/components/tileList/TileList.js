import React from "react";

export const TileList = ({ items }) => {
  return items.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item.name || items.appointmentName}</h1>
        {item.phoneNumber && <p>Phone: {item.phoneNumber}</p>}
        {item.email && <p>Email: {item.email}</p>}
        {item.date && <p>Date: {item.date}</p>}
        {item.time && <p>Time: {item.time}</p>}
        {item?.contact?.name && <p>Customer Name: {item.contact.name}</p>}
      </div>
    );
  });
};
