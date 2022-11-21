import {
  AppBar,
  Grid,
  LinearProgress,
  TextField,
  Toolbar,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { PokeStyle } from "./PokeStyle";
import PokeCard from "./PokeCard";

const PokeDex = () => {
  const classes = PokeStyle();
  const [pokemonData, setPokemonData] = useState();
  const [filter, setFilter] = useState("");

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

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.searchContainer}>
            <SearchIcon className={classes.searchIcon} />
            <TextField
              className={classes.searchField}
              label="Search..."
              variant="standard"
              onChange={handleChange}
            />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.mainPageContainer}>
          {pokemonData.map((pokemon) => (
            <PokeCard pokemon={pokemon} filter={filter} />
          ))}
        </Grid>
      ) : (
        <LinearProgress color="secondary" />
      )}
    </div>
  );
};

export default PokeDex;
