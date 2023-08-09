import * as React from "react";
import { useState } from "react";
import "./Achievement.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Achievement(props) {
  const [achievement, setAchievement] = useState([{ id: 0, value: "" }]);
  const [count, setCount] = useState(1);
  const handleInput = (e) => {
    e.preventDefault();
    const lastField = achievement[achievement.length - 1];
    if (lastField.value !== "") {
      setAchievement([...achievement, { id: count, value: "" }]);
      setCount(count + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setAchievement([...achievement]);
    props.setClick(props.click + 1);
  };
  const handleBack = (e) => {
    e.preventDefault();
    props.setClick(props.click - 1);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "end",
          "& > :not(style)": {
            marginTop: "40px",
            padding: " 0px 10px 10px",
            height: "auto",
          },
        }}
      >
        <Paper className="Paper">
          <div>
            <h1>Achievement</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          <div>
            <h3>Achievement-1</h3>
          </div>
          <form className="Form">
            <div className="inputs">
              {achievement.map((field) => (
                <TextField
                  key={field.id}
                  id="outlined-basic"
                  label={`Achievement-${field.id}`}
                  variant="outlined"
                  value={field.value}
                  onChange={(e) => {
                    const upadateField = achievement.map((item) =>
                      item.id === field.id
                        ? { ...item, value: e.target.value }
                        : item
                    );
                    setAchievement(upadateField);
                  }}
                />
              ))}
            </div>

            <button className="Addbutton" onClick={handleInput}>
              Add New
            </button>

            <div className="nxtButton">
              <div>
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                  onClick={handleBack}
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
                  Preview
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </Box>
    </>
  );
}
