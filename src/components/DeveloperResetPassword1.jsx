import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #0984e3;
  color: white;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  text-align: center;
  color: ${(props) => (props.error ? "red" : "green")};
`;

export default function DeveloperResetPassword1() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleReset = async () => {
    if (!email || !newPassword) {
      setError(true);
      setMessage("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("https://elexdonhost.com/api_elexdonhost/admin_reset_password.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ADMIN_SECRET",
        },
        body: JSON.stringify({
          email,
          newpassword: newPassword,
        }),
      });

      const data = await res.json();

      setError(!data.success);
      setMessage(data.message);

      if (data.success) {
        setEmail("");
        setNewPassword("");
      }
    } catch (err) {
      setError(true);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Reset User Password</Title>

      <Input
        type="email"
        placeholder="User Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      <Button onClick={handleReset} disabled={loading}>
        {loading ? "Resetting..." : "Reset Password"}
      </Button>

      {message && <Message error={error}>{message}</Message>}
    </Container>
  );
}