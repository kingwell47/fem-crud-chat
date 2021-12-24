import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const AddCommentCard = () => {
  return (
    <Card>
      <CardContent>
        <TextField
          id="outlined-multiline-flexible"
          label="Add a comment..."
          multiline
          rows={4}
          fullWidth
        />
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Avatar>P</Avatar>
        <Button color="primary" variant="contained" disableElevation>
          SEND
        </Button>
      </CardActions>
    </Card>
  );
};

export default AddCommentCard;
