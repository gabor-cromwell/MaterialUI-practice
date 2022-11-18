import {
  AppBar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  mainPageContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
});

const Pokedex = () => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=50`
      );
      const data = response.data.results;
      const pokemonObject = data.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          index + 1
        }.png`,
      }));
      setPokemonData(pokemonObject);
    }
    fetchData();
  }, []);

  const getPokemonCard = (pokemon) => {
    const { id, name, picture } = pokemon;

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
        <Card>
          <CardMedia
            className={classes.cardMedia}
            image={picture}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>
              {id}. {name[0].toUpperCase() + name.slice(1)}
            </Typography>
          </CardContent>
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
          {pokemonData.map((pokemon) => getPokemonCard(pokemon))}
        </Grid>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
};

export default Pokedex;
