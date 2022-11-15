import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Button,
  Container,
} from "@material-ui/core";
import Diversity1SharpIcon from "@mui/icons-material/Diversity1Sharp";

{
  /*import Navbar from "./Navbar";
import Content from "./Content";
import Card from "./Card";
import Footer from "./Footer";*/
}
import database from "./database";
function createCard(jobPost) {
  return (
    <Card
      key={jobPost.id}
      id={jobPost.id}
      JobTitle={jobPost.JobTitle}
      Department={jobPost.Department}
      Location={jobPost.Location}
      Description={jobPost.Description}
      Salary={jobPost.Salary}
    />
  );
}
function App() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Diversity1SharpIcon />
          <Typography variant="h5">DigiEmploy</Typography>
        </Toolbar>
        <Button variant="contained" color="primary" size="medium">
          {" "}
          Post a Job
        </Button>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              DigiEmploy
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              The latest jobs in the Fintech industry from world's best unicorn
              startups. You just need your willingness to grow.
            </Typography>
            <div>
              <Grid Container spacing={2} justify="center">
                {" "}
                <Grid item>{database.map(createCard)}</Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}
export default App;
