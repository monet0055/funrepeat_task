import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {  // onLogin を props で受け取る
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  console.log("Rendering LoginPage");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      if (onLogin) {
        onLogin();  // `onLogin` が渡されていない場合でもエラーが出ないように
      }
      navigate("/customers"); // 顧客一覧ページへ移動
    } else {
      alert("ログイン情報が間違っています");
    }
  };

  return (
    <div>
      <h2>ログイン</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ユーザー名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;