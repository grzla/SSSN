import React from "react";
import { globalStyles } from "../styles/styles";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    // remove username from local storage
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <>
      <div style={styles.appBar}>
        <p style={globalStyles.text}>SSSN</p>

        <div style={styles.logout}>
          <button style={styles.button} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export const styles = {
  appBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    borderBottom: "1px solid #e1e8ed",
  },
  logout: {
    cursor: "pointer",
    marginRight: "40px",
  },
  button: {
    backgroundColor: "blue",
    border: "none",
    cursor: "pointer",
  },
};

export default AppBar;
