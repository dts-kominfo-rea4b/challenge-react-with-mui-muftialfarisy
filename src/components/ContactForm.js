// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Data from "../data/contacts.json";

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const [newContact, setKontak] = useState([]);
  // console.log(handleClick);
  return (
    <>
      <Box
        // component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="name"
            label="Name"
            onChange={(e) => {
              setKontak({ ...newContact, name: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="phone"
            label="phone"
            onChange={(e) => {
              setKontak({ ...newContact, phone: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="email"
            label="Email"
            onChange={(e) => {
              setKontak({ ...newContact, email: e.target.value });
            }}
          />
        </div>
        <div>
          <TextField
            required
            id="photo"
            label="Photo Url"
            onChange={(e) => {
              setKontak({ ...newContact, photo: e.target.value });
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              handleClick(newContact);
              // onSubmit();
              // setKontak("");
            }}
          >
            Add New
          </button>
        </div>
      </Box>
    </>
  );
};

export default ContactForm;
