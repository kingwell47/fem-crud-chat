import React from "react";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const CommentCard = () => {
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
          title={
            <Box
              sx={{
                width: "100%",
                display: "flex",
              }}
            >
              <Typography
                color="text.primary"
                sx={{ fontWeight: "bold", mr: 2 }}
              >
                amyrobson
              </Typography>
              <Typography color="text.secondary">1 month ago</Typography>
            </Box>
          }
          sx={{ p: 0, mb: 2 }}
        />
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default CommentCard;
