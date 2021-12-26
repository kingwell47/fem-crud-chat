import React from "react";
import CommentCard from "./CommentCard";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepConnector from "@mui/material/StepConnector";

const Comment = (props) => {
  return (
    <>
      <CommentCard {...props} />
      <Grid container sx={{ mt: 2 }}>
        <Grid item xs={0.5} sx={{ borderLeft: "1px solid grey" }} />
        <Grid item xs={11.5}>
          <Grid container spacing={2}>
            {props.replies.map((reply) => (
              <Grid item>
                <CommentCard {...reply} key={reply.id} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Comment;
