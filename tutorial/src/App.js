import "./App.css";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Content />
          <Grid item xs={2} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
