import { Button, Grid, Paper, Switch, Typography } from "@material-ui/core";
import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useState } from "react";

function App2() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "100vh" }}>
        <Grid container>
          <Typography variant="h1">This is a text</Typography>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>
        <Grid container direction="column">
          <Button variant="contained" color="primary">
            First button
          </Button>
          <Button variant="contained" color="secondary">
            Second button
          </Button>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default App2;
