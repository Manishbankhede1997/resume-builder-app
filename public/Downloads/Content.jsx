import React from "react";
import { Link, Outlet } from "react-router-dom";

function Content() {
  return (
    <>
      <h3>Content</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi,
        voluptatum exercitationem vitae perferendis ipsam, cupiditate unde
        distinctio laborum aliquid atque totam magni mollitia ea consequuntur
        expedita ut ab dolorum.
      </p>
      <div>
        <Link to="frontend">Front End</Link> <br />
        <Link to="backend">Backe End</Link> <br />
        {/* <a href="backend">Backe End</a> <br/>  never use anchor tag */}
      </div>
      <Outlet />
    </>
  );
}

export default Content;
