import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import Datak from "./data/contacts.json";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// Uncomment untuk memuat daftar kontak
// import contactsJSON from './data/contacts.json';
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list
  const [datas, setKontak] = useState(Datak);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F3F1EB",
    ...theme.typography.body2,
    width: "50%",
    padding: theme.spacing(1),
    margin: "100px 100px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#DBF6F0",
    ...theme.typography.body2,
    width: "50%",
    padding: theme.spacing(1),
    margin: "100px 100px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handleClick = (kontak) => {
    console.log(kontak);
    setKontak([...datas, kontak]);
  };
  // console.log(datas);
  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  return (
    <div className="App">
      <Header />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>
              <ContactForm handleClick={handleClick} />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item2>
              {datas.map((dataa) => {
                return (
                  <Contact
                    key={dataa.name}
                    name={dataa.name}
                    phone={dataa.phone}
                    email={dataa.email}
                    photo={dataa.photo}
                  />
                );
                // return <h3 key={dataa.name}>{dataa.name}</h3>;
              })}
            </Item2>
            {/* <Item2>
              {kontak.map((dataa) => {
                <Contact key={dataa.name} nama={dataa.name} />;
              })}
            </Item2> */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default App;
