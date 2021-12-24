import React from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const CommentCard = ({ content, createdAt, score, user, replies }) => {
  const headerTitle = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Typography color="text.primary" sx={{ fontWeight: "bold", mr: 2 }}>
        {user.username}
      </Typography>
      <Typography color="text.secondary">{createdAt}</Typography>
    </Box>
  );

  return (
    <Card sx={{ width: "100%", boxShadow: "none" }}>
      <CardContent>
        <CardHeader
          avatar={
            <Avatar
              alt={user.username}
              src={user.image.png}
              sx={{ width: "2rem", height: "auto" }}
            />
          }
          title={headerTitle}
          sx={{ p: 0, mb: 2 }}
        />
        <Typography variant="body1">{content}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonGroup
          variant="text"
          color="primary"
          disableElevation
          sx={{
            backgroundColor: "var(--color-neutral-100)",
            borderRadius: "10px",
            "& .MuiButtonGroup-grouped:not(:last-of-type)": {
              borderRight: "none",
            },
          }}
        >
          <Button>
            <AddIcon sx={{ fontSize: "1rem" }} />
          </Button>
          <Button
            sx={{
              fontWeight: "700",
              fontSize: "1rem",
              px: 0,
              minWidth: "40px",
            }}
          >
            {score}
          </Button>
          <Button>
            <RemoveIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </ButtonGroup>
        <Button variant="text">
          <ReplyIcon />
          <Typography sx={{ textTransform: "capitalize", fontWeight: 700 }}>
            Reply
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
