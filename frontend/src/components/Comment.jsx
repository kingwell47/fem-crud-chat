import React from "react";
import CommentCard from "./CommentCard";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepConnector from "@mui/material/StepConnector";

const Comment = (props) => {
  return (
    <>
      <Stepper orientation="vertical">
        <Step>
          <CommentCard {...props} />
        </Step>
        {props.replies.map((reply) => (
          <Step key={reply.id} sx={{ pl: 1.5, position: "relative" }}>
            <CommentCard {...reply} />
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default Comment;
