import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  LinearProgress,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import mockData from "./mockData";

const useStyles = makeStyles({
  mainPageContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState(mockData);

  const getPokemonCard = (pokemonId) => {
    {
      //   console.log(pokemonData[`${pokemonId}`]);
      const { id, name } = pokemonData[`${pokemonId}`];
      const { species } = pokemonData[`${pokemonId}`];
      const { url } = species;
      console.log(id, name, url);
    }
    return (
      <Grid item xs={12} sm={6} md={4} key={pokemonId}>
        <Card>
          <CardMedia image={"url"}></CardMedia>
          <CardContent>{pokemonId}</CardContent>
        </Card>
      </Grid>
    );
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.mainPageContainer}>
          {Object.keys(pokemonData).map((pokemonId) =>
            getPokemonCard(pokemonId)
          )}
        </Grid>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
};

export default Pokedex;
