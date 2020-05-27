import React from "react";
import { CardHeader, Divider, makeStyles } from "@material-ui/core";

import DeleteAccount from "./DeleteAccount";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Delete() {
  const classes = useStyles();
  return (
    <FadeIn>
      <CardHeader title="Deactivate your account" />
      <Divider />
      <DeleteAccount />
    </FadeIn>
  );
}

export default Delete;
