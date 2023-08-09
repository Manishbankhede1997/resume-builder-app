import React from "react";
import "./Homepage.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTemplateId } from "../../Redux/Actions";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "& img": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    transition: "filter 0.3s ease-out",
  },
  "&:hover img": {
    filter: "blur(2px)",
    cursor: "pointer",
  },
}));
function Homepage() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [select, setSelect] = useState(1);
  const handleTemp = (templeteId) => {
    dispatch(setTemplateId(templeteId));
    console.log("homeId", templeteId);
    navigation("/detailPage");
  };
  return (
    <div className="homepage-bg">
      <h1>Use Templates-Make Ausme Resume</h1>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Item className="resume">
              <img src="temp1.jpg" alt="resume1" />
              <Button
                variant="contained"
                className="buttons-temp"
                onClick={() => handleTemp("template1")}
              >
                Use Template
              </Button>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item className="resume">
              <img
                src="https://marketplace.canva.com/EAE8mhdnw_g/2/0/1131w/canva-grey-clean-cv-resume-photo-pIsBixsev8I.jpg"
                alt="resume2"
              />
              <Button
                variant="contained"
                className="buttons-temp"
                onClick={() => handleTemp("template2")}
              >
                Use Template
              </Button>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Item className="resume">
              <img
                src="https://content.wepik.com/statics/9728507/preview-page0.jpg"
                alt="resume3"
              />
              <Button
                variant="contained"
                className="buttons-temp"
                onClick={() => handleTemp("template3")}
              >
                Use Template
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Homepage;
