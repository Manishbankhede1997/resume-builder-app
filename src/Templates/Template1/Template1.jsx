import React from "react";
import "./Template1.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailLockIcon from "@mui/icons-material/MailLock";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

function Template1({
  personalImfo,
  workExperience,
  education,
  keySkill,
  project,
  achievement,
}) {
  const [loader, setLoader] = useState(false);
  const {
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
  } = personalImfo;

  const imageURL = img ? URL.createObjectURL(img) : null;
  // const downloadPDF = () => {
  //   const doc = new jsPDF("p", "pt", "a4");
  //   const capture = document.querySelector(".pdf-container");
  //   doc.html(capture);
  //   setLoader(true);
  //   doc.save("receipt.pdf");
  //   setLoader(false);
  // };
  const downloadPDF = () => {
    const capture = document.querySelector(".pdf-container");

    // Generate an image of the content using html2canvas
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      // Create a PDF and add the image
      const doc = new jsPDF("p", "pt", "a4");
      const width = doc.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      doc.addImage(imgData, "JPEG", 0, 0, width, height);

      // Save the PDF
      doc.save("resume.pdf");
    });
  };

  return (
    <>
      <div className="temp-back">
        <div className="pdf-container">
          <div>
            {/* Add a class for the grid container */}

            <Box className="header">
              <div className="head-skill">
                <span className="heading">
                  {firstName} {lastName}
                </span>
                <span className="desc">{objective}</span>
              </div>
              <div>
                <Avatar
                  sx={{ width: "100px", height: "100px" }}
                  src={imageURL}
                  className="avtar"
                />
              </div>
            </Box>
            <Box className="boxBody">
              <div className="gridbox">
                {" "}
                {/* Add a class for the grid items */}
                <div className="items">
                  <h3 className="heading3">PERSONAL DETAILS</h3>
                  <div className="iconsList">
                    <div className="icons">
                      <AddIcCallIcon className="icon" />
                      <span>{mobileNumber}</span>
                    </div>
                    <div className="icons">
                      <MailLockIcon className="icon" />
                      <a
                        href="/"
                        style={{ textDecoration: "none" }}
                        target="_blank"
                      >
                        {email}
                      </a>
                    </div>
                    <div className="icons">
                      <HomeIcon className="icon" />
                      <span>
                        {address}-{pincode}
                        {state}
                      </span>
                    </div>
                    <div className="icons">
                      <LanguageIcon className="icon" />
                      <span>{city}</span>
                    </div>
                  </div>
                  <Divider />
                  <div>
                    <h3 className="heading3">SKILL</h3>
                    {keySkill.map((item, i) => {
                      return (
                        <ul className="list" key={i}>
                          <li className="skill-div">{item.value}</li>
                        </ul>
                      );
                    })}
                  </div>
                  <Divider />
                  <div>
                    <h3 className="heading3">EDUCATION</h3>
                    {education.map((item, i) => {
                      return (
                        <ul className="list" key={i}>
                          <li>{item.domain}</li>
                          <span>{item.degree}</span>
                          <br />
                          <span>University-{item.university}</span>
                          <span>
                            <br />({item.startyear} -{item.lastYear})
                          </span>
                        </ul>
                      );
                    })}
                  </div>
                </div>
                <div className="items">
                  <div>
                    <h3 className="heading3">ACHIEVEMENT</h3>
                    {achievement.map((item, i) => {
                      return (
                        <ul style={{ padding: "0px 0px 5px 15px" }} key={i}>
                          <li>{item.value}</li>
                        </ul>
                      );
                    })}
                  </div>
                  <Divider />
                  <div>
                    <h3 className="heading3">EXPERIENCE</h3>
                    {workExperience.map((item, i) => {
                      return (
                        <ul className="list" key={i}>
                          <li>
                            <h4>Job-Tittle</h4> {item.jobtitle}
                          </li>

                          <li>
                            <h4>Organization</h4> {item.organisation}
                            <p>
                              ({item.startyear}- {item.lastYear})
                            </p>
                          </li>
                        </ul>
                      );
                    })}
                  </div>
                  <Divider />
                  <div>
                    <h3 className="heading3">PROJECT</h3>
                    {project.map((item, i) => {
                      return (
                        <ul
                          style={{
                            paddingLeft: "12px",
                            paddingBottom: "5px",
                          }}
                          key={i}
                        >
                          <li>{item.value}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>
        <Button
          style={{ marginTop: "15px" }}
          variant="contained"
          onClick={downloadPDF}
          disabled={!(loader === false)}
        >
          {loader ? <span>downloading</span> : <span>download</span>}
        </Button>
      </div>
    </>
  );
}

export default Template1;
