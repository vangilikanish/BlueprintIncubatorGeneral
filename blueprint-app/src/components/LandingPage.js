import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Grid, Button, ButtonGroup, Card } from "@material-ui/core";

const LandingPage = (props) => {
  const [directToLogin, setDirectToLogin] = useState(false);
  const [directToSignup, setDirectToSignup] = useState(false);

  const handleLoginClick = () => {
    setDirectToLogin(true);
  };

  const handleSignupClick = () => {
    setDirectToSignup(true);
  };

  if (directToLogin === true) return <Redirect to="/login" />;

  if (directToSignup === true) return <Redirect to="/signup" />;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", backgroundColor: "#E67E22" }}
    >
      <Card>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minWidth: "30vw", padding: "15px" }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/812822571094900746/837106499863969812/wyr_transparent.png"
            height="80"
            style={{ marginTop: "15px", marginBottom: "15px" }}
            alt=""
          />
          <ButtonGroup
            orientation="vertical"
            fullWidth
            style={{ marginBottom: "15px" }}
          >
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "15px", backgroundColor: "orange" }}
              onClick={handleLoginClick}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "15px", backgroundColor: "orange" }}
              onClick={handleSignupClick}
            >
              Sign up
            </Button>
          </ButtonGroup>
        </Grid>
      </Card>
    </Grid>
  );
};

export default LandingPage;
