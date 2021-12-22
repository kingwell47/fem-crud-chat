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

const CommentCard = () => {
  const headerTitle = (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Typography color="text.primary" sx={{ fontWeight: "bold", mr: 2 }}>
        amyrobson
      </Typography>
      <Typography color="text.secondary">1 month ago</Typography>
    </Box>
  );

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <CardHeader
          avatar={
            <Avatar
              alt="amyrobson"
              src="../images/avatars/image-amyrobson.png"
              sx={{ width: "2rem", height: "auto" }}
            />
          }
          title={headerTitle}
          sx={{ p: 0, mb: 2 }}
        />
        <Typography variant="body1">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You've nailed the design and the
          responsiveness at various breakpoints works really well.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonGroup
          size="small"
          variant="contained"
          color="primary"
          disableElevation
          sx={{
            width: 100,
          }}
        >
          <Button>
            <AddIcon />
          </Button>
          <Button>12</Button>
          <Button>
            <RemoveIcon />
          </Button>
        </ButtonGroup>
        <Button>
          <ReplyIcon />
          Reply
        </Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
