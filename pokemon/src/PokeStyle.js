import { makeStyles, alpha } from "@material-ui/core/styles";

export const PokeStyle = makeStyles((theme) => ({
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
  searchContainer: {
    display: "flex",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBlock: "5px",
  },
}));
