// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Data from "../data/contacts.json";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = (data) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360 }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={data.photo} />
          </ListItemAvatar>
          <ListItemText
            primary={data.name}
            secondary={
              <React.Fragment>
                <Typography
                  // key={index}
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                ></Typography>
                <p>{data.phone}</p>
                <p>{data.email}</p>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </>
  );
};

export default Contact;
