import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

const useStyle = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyle();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>
          {" "}
          Coffee Maker Machines
        </Typography>
        <AccountBalanceIcon></AccountBalanceIcon>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
