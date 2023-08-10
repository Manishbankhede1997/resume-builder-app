import * as React from "react";
import "./Personalimpfo.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PersonalImfo(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [pincode, setPincode] = React.useState("");
  const [objective, setObjective] = React.useState("");
  const [imgPreview, setImgPreview] = useState(null);
  const [img, setImg] = useState("");
  const navigation = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    props.setPersonalImfo({
      firstName,
      lastName,
      email,
      mobileNumber,
      address,
      city,
      state,
      pincode,
      objective,
      img,
    });

    props.setClick(props.click + 1);
  };

  const handleBackbtn = () => {
    navigation("/");
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    // Read the selected file as a data URL to display a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
      setImg(file); // Store the selected image file in the state
    } else {
      setImg(null);
      setImgPreview(null);
    }
  };

  const handleProfile = () => {
    // Trigger the click event on the file input
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            marginTop: "40px",
            padding: " 0px 10px 10px",
          },
        }}
      >
        <Paper>
          <Box className="AvtarBox">
            <Avatar src={imgPreview} />
            <div className="button">
              <Button variant="outlined" onClick={handleProfile}>
                Set Profile
              </Button>
            </div>
          </Box>
          <Divider style={{ marginBottom: "10px" }} />
          <form className="Form">
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Email Adress"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
            </div>
            <div>
              <TextareaAutosize
                style={{ width: "50vw", padding: "10px 0px 0px 10px" }}
                aria-label="minimum height"
                minRows={3}
                placeholder="Write your address here"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="Linkdin-id"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="State"
                variant="outlined"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="pincode"
                variant="outlined"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div>
              <TextareaAutosize
                style={{ width: "50vw", padding: "10px 0px 0px 10px" }}
                aria-label="minimum height"
                minRows={4}
                placeholder="Objective"
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
              />
            </div>
            <div className="nxtButton">
              <div>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleBackbtn}
                  style={{ padding: "7px 30px" }}
                >
                  Back
                </Button>
              </div>
              <div className="Next">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                  onClick={handleSubmit}
                >
                  Next
                </Button>
              </div>
            </div>
          </form>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInputChange}
          />
        </Paper>
      </Box>
    </>
  );
}
