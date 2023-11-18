import React, { useState } from "react";

import "../Style/style.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function Home() {
  const [queryTerm, setqueryTerm] = useState();
  const navigate = useNavigate();

  function HandlSearch() {
    navigate(`/search?q=${queryTerm}`);
  }

  return (
    <div className="container">
      <div className="class">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        ></Box>
        <div>
          <TextField
            id="standard-basic"
            className="Box"
            label="Movies"
            variant="standard"
            onChange={(e) => setqueryTerm(e.target.value)}
            value={queryTerm}
          />
          <button className="Button" onClick={HandlSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
