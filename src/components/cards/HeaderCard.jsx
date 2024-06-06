import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import upanzilogo from "../../assets/upanzi.svg";
import avatal from "../../assets/avatallogo.png";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  return (
    <header className="flex items-center justify-between ml-8 bg-white shadow border rounded">
      <div className="flex items-center">
        <div className="text-left">
          <img src={upanzilogo} alt="upanzilogo" className="border-r" />
        </div>
      </div>
      <div className="flex items-center space-x-4 border">
        <Avatar alt="avatal" src={avatal} />
        <span className="text-gray-800">Manzi David</span>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#e6f7ef",
            color: "green",
            fontWeight: "bold",
            boxShadow: "none",
            marginLeft: "8px", // Adjust the value as needed
            "&:hover": {
              backgroundColor: "green",
              color: "white",
            },
          }}
          endIcon={<LogoutIcon />}
        >
          Sign out
        </Button>
      </div>
    </header>
  );
};

export default Header;
