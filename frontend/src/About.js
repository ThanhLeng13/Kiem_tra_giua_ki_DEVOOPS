import React from "react";

function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)",
        color: "white",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        padding: "48px 24px"
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(255,255,255,0.2)",
          padding: "32px",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)"
        }}
      >
        <h1 style={{ marginBottom: "24px" }}>Thông tin sinh viên</h1>
        <p><strong>Họ tên:</strong> [Ly Thanh Long]</p>
        <p><strong>MSSV:</strong> [2251220144]</p>
        <p><strong>Lớp:</strong> [22CT4]</p>
      </div>
    </div>
  );
}

export default About;