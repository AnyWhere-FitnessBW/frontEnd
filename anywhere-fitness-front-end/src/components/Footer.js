import React from 'react';

export default function Footer(props) {
    const footerStyle = {
        backgroundColor: "red",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "white",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "30px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "100px",
        width: "100%"
      };

    return (
        <div style={footerStyle} className="text-center">
            Copyright Anywhere Fitness 2019
        </div>
  );
};
