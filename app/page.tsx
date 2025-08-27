import React from "react";
import "./globals.css";

const App: React.FC = () => {
  return (

    <div className="container">
      {/* 좌측 로고 영역 */}
      <div className="logo-section">
        <img src="seed_logo.png" alt="Seed Logo" className="logo-image" />
        <span className="logo-text">Seed</span>
      </div>

      {/* 우측 로그인 박스 */}
      <div className="login-box">
        <h2 style={{ fontSize: "16px", fontWeight: "bold" }}>
  <span style={{ display: "inline-block", transform: "rotate(90deg)" }}>⌂</span> 로그인
</h2>
        <form>
          <div className="input-group">
            <label>이메일 / 아이디</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>비밀번호</label>
            <input type="password" />
          </div>
          <div className="button-group">
            <button type="button" className="signup-btn">회원가입</button>
            <button type="submit" className="login-btn">로그인 →</button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default App;
