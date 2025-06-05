import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ items }) => {
  return items.map((item, index) => {
    const { name, ...description } = item;
    return (
      <div key={index}>
        <Tile name={name} description={description} />
      </div>
    );
  });
};
