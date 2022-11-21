import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";

import { Fragment } from "react";

import { PokeStyle } from "./PokeStyle";

const PokeCard = ({ pokemon, filter }) => {
  const { id, name, picture } = pokemon;
  const classes = PokeStyle();

  return (
    <Fragment key={id}>
      {name.includes(filter) && (
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
      )}
    </Fragment>
  );
};

export default PokeCard;
