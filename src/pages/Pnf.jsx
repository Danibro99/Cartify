import React from "react";
import Header from '../components/Header'

export default function Pnf() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "600px" }}>
        {/* Main GIF */}
        <img
          src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
          alt="404 gif"
          style={{ width: "300px", borderRadius: "10px" }}
        />

        <h1 style={{ fontSize: "60px", marginTop: "20px" }}>404</h1>
        <h2 style={{ marginBottom: "10px" }}>Page Not Found</h2>

        <p style={{ color: "#666", marginBottom: "20px" }}>
          Looks like this page wandered off. Let’s get you back on track.
        </p>

        {/* Home Button */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            padding: "10px 20px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Go Home
        </button>

        {/* Accent GIF */}
        <div style={{ marginTop: "30px", color: "#555" }}>
          <p>Try exploring our latest items!</p>
        </div>
      </div>
    </div>
  );
}
