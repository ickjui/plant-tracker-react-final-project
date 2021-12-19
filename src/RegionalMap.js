import React from "react";

function RegionalMap() {
  return (
    <>
      <h3 className="map-header">Find your zone </h3>
      <p className="map-paragraph">
        "The USDA Plant Hardiness Zone Map is the standard by which gardeners
        and growers use to determine which plants are most likely to thrive at a
        specific geographical location. The map is based on the average annual
        minimum winter temperature, then divided into 10-degree Fahrenheit
        zones."
      </p>
      <form
        action="https://garden.org/nga/zipzone/index.php?zip="
        method="GET"
        target="_blank"
      >
        <input
          type="text"
          id="zip"
          name="zip"
          placeholder="Enter your zip code"
        ></input>
        <button type="submit" id="submit">
          Find my zone
        </button>
      </form>
      <img
        className="map-img"
        src="https://chestnuthilltreefarm.com/wp-content/uploads/2020/01/zonemap.png"
        alt="USDA Zone Map"
        width="1000"
        height="600"
      />
    </>
  );
}

export default RegionalMap;
