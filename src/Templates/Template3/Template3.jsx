import React, { useState } from "react";
import "./Template3.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailLockIcon from "@mui/icons-material/MailLock";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import Divider from "@mui/material/Divider";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function Template3({
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

  const downloadPDF = () => {
    const capture = document.querySelector(".Paper");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("receipt.pdf");
    });
  };

  return (
    <div className="template-container">
      <div className="Paper">
        <Box className="header-3">
          <div className="avatar-container3">
            <Avatar
              src={imageURL}
              className="avatar"
              sx={{ width: 130, height: 130 }}
            />
          </div>
          <div className="header-details3">
            <h1 className="name3">
              {firstName} {lastName}
            </h1>
            <p className="objective3">{objective}</p>
          </div>
        </Box>
        <Divider />
        <Box className="boxBody3">
          <div className="items-container3">
            <div className="items3">
              <h3 className="heading3">PERSONAL DETAILS</h3>
              <div className="iconsList3">
                <div className="icons3">
                  <AddIcCallIcon className="icon3" />
                  <span>{mobileNumber}</span>
                </div>
                <div className="icons3">
                  <MailLockIcon className="icon3" />
                  <p
                    href="/"
                    style={{ textDecoration: "none3" }}
                    target="_blank"
                  >
                    {email}
                  </p>
                </div>
                <div className="icons3">
                  <HomeIcon className="icon3" />
                  <span>
                    {address}-({pincode})<br />
                    {state}
                  </span>
                </div>
                <div className="icons">
                  <LanguageIcon className="icon3" />
                  <span>{city}</span>
                </div>
              </div>
              <Divider />
              <div>
                <h3 className="heading3">SKILL</h3>
                {keySkill.map((item, i) => {
                  return (
                    <ul className="list3" key={i}>
                      <li className="skill-div3">{item.value}</li>
                    </ul>
                  );
                })}
              </div>
              <Divider />
              <div>
                <h3 className="heading3">EDUCATION</h3>
                {education.map((item, i) => {
                  return (
                    <ul className="list3" key={i}>
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
            <div className="items3">
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
                    <ul className="list3" key={i}>
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
      <Button
        style={{ marginTop: "15px" }}
        variant="contained"
        onClick={downloadPDF}
        disabled={loader}
      >
        {loader ? <span>Downloading</span> : <span>Download</span>}
      </Button>
    </div>
  );
}

export default Template3;
