import { Grid } from "@material-ui/core";
import React from "react";
import CoffeCard from "./CoffeCard";
import data from "./data";

function Content() {
  return (
    <Grid container spacing={2}>
      {data.map((machine) => (
        <Grid item xs={12} sm={6} md={4}>
          <CoffeCard {...machine} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Content;
