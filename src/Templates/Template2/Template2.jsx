import React, { useState } from "react";
import "./Template2.css"; // Make sure to import your CSS file
import Avatar from "@mui/material/Avatar";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailLockIcon from "@mui/icons-material/MailLock";
import HomeIcon from "@mui/icons-material/Home";
import LanguageIcon from "@mui/icons-material/Language";
import Divider from "@mui/material/Divider";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Button } from "@mui/material";

function Template2({
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
    const capture = document.querySelector(".pdf-container");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("resume.pdf");
    });
  };

  return (
    <div className="template-container">
      <div className="pdf-container">
        <div className="paper">
          <div className="header-2">
            <div className="avatar-container">
              <Avatar
                src={imageURL}
                className="avatar"
                style={{ width: "120px", height: "120px" }}
              />
            </div>
            <div className="header-details">
              <h1 className="name-2">
                {firstName} {lastName}
              </h1>
              <p className="objectives">{objective}</p>
            </div>
          </div>
          <Divider />
          <div className="body">
            <div className="gridbox">
              <div className="section">
                <h3 className="section-headings">PERSONAL DETAILS</h3>
                <div className="icon-list">
                  <div className="icon-item">
                    <AddIcCallIcon className="icon" />
                    <span>{mobileNumber}</span>
                  </div>
                  <div className="icon-item">
                    <MailLockIcon className="icon" />
                    <p>{email}</p>
                  </div>
                  <div className="icon-item">
                    <HomeIcon className="icon" />
                    <span>
                      {address} - {pincode}
                      <br />
                      {city}, {state}
                    </span>
                  </div>
                  <div className="icon-item">
                    <LanguageIcon className="icon" />
                    <span>{city}</span>
                  </div>
                </div>
                <Divider />
                <div>
                  <h3 className="section-headings">SKILLS</h3>
                  {keySkill.map((item, i) => (
                    <ul className="list" key={i}>
                      <li className="skill-item">{item.value}</li>
                    </ul>
                  ))}
                </div>
                <Divider />
                <div>
                  <h3 className="section-headings">EDUCATION</h3>
                  {education.map((item, i) => (
                    <ul className="list" key={i}>
                      <li>{item.domain}</li>
                      <li>{item.degree}</li>
                      <li>University - {item.university}</li>
                      <li>
                        ({item.startyear} - {item.lastYear})
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
              <div className="section">
                <div>
                  <h3 className="section-headings">ACHIEVEMENTS</h3>
                  {achievement.map((item, i) => (
                    <ul className="list" key={i}>
                      <li>{item.value}</li>
                    </ul>
                  ))}
                </div>
                <Divider />
                <div>
                  <h3 className="section-headings">EXPERIENCE</h3>
                  {workExperience.map((item, i) => (
                    <ul className="list" key={i}>
                      <li>
                        <h4>Job Title</h4> {item.jobtitle}
                      </li>
                      <li>
                        <h4>Organization</h4> {item.organisation}
                        <p>
                          ({item.startyear} - {item.lastYear})
                        </p>
                      </li>
                    </ul>
                  ))}
                </div>
                <Divider />
                <div>
                  <h3 className="section-headings">PROJECTS</h3>
                  {project.map((item, i) => (
                    <ul className="list" key={i}>
                      <li>{item.value}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default Template2;
