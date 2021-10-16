import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  LoginFailed,
  LoginRequested,
  RegisterType,
} from "../action/userAction";

const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const userLogIn = (e) => {
  //   dispatch(LoginSuccessed());
  // };

  const userLogIn = () => {
    var authenticationData = {
      Username: username,
      Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
      authenticationData
    );
    var poolData = {
      UserPoolId: process.env.REACT_APP_USERPOOLID, // User pool id
      ClientId: process.env.REACT_APP_CLIENTID, //  client id
    };

    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
      Username: username,
      Pool: userPool,
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var token = result.getAccessToken().getJwtToken();
        // console.log(token)
        localStorage.setItem("token", token);
        dispatch(LoginRequested(token));
        return token;
      },

      onFailure: function (err) {
        dispatch(LoginFailed());
        return err.message || JSON.stringify(err);
      },
    });
  };

  const switchToRgister = () => {
    dispatch(RegisterType());
  };

  const logInStyle = makeStyles((theme) => ({
    logStyle: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FEF1E6",
    },
    cardStyle: {
      //   position: "relative",
      //   top: "50%",
      //   left: "50%",
      height: "60%",
      width: "40%",
      maxWidth: "500px",
      minWidth: "400px",
      minHeight: "200px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#A8E7E9",
      borderRadius: "10px",
    },
    fieldStyle: {
      marginTop: "20px",
      "& #user,#pwd": {
        width: "300px",
      },
    },
    fieldBtnStyle: {
      marginTop: "30px",
      "& button": {
        width: "150px",
        "&:nth-child(2)": {
          marginLeft: "10px",
        },
      },
    },
  }));

  const style = logInStyle();

  return (
    <div className={style.logStyle}>
      <Card className={style.cardStyle}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login
          </Typography>
        </CardContent>
        <div className={style.fieldStyle}>
          <TextField
            type="text"
            label="User Name"
            variant="outlined"
            id="user"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className={style.fieldStyle}>
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            id="pwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={style.fieldBtnStyle}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => switchToRgister()}
          >
            Register
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => userLogIn()}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginComponent;
