import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="root">
      <Grid
        margin={"auto"}
        container
        direction="column"
        alignItems="center"
        spacing={2}
      >
        <Grid item className="animation">
          <Typography variant="h4">Welcome to ChatBox </Typography>
        </Grid>
        <Grid item className="animation">
          <Typography variant="body1">Login to start chatting now!</Typography>
        </Grid>
        <Grid item className="animation">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate("/profiles");
            }}
          >
            Start Now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
