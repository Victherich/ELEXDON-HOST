import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 25px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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

  &:disabled {
    background: #b2bec3;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  text-align: center;
  margin-top: 15px;
  color: ${(props) => (props.error ? "red" : "green")};
`;

export default function UpdateEmailByEmail() {
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleUpdate = async () => {
    if (!currentEmail || !newEmail) {
      setError(true);
      setMessage("Please fill both fields");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("https://elexdonhost.com/api_elexdonhost/developer_update_email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ADMIN_SECRET",
        },
        body: JSON.stringify({ currentEmail, newEmail }),
      });

      const data = await res.json();
      setError(!data.success);
      setMessage(data.message);

      if (data.success) {
        setCurrentEmail("");
        setNewEmail("");
      }
    } catch (err) {
      setError(true);
      setMessage("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Update User Email</Title>

      <Input
        type="email"
        placeholder="Current Email"
        value={currentEmail}
        onChange={(e) => setCurrentEmail(e.target.value)}
      />

      <Input
        type="email"
        placeholder="New Email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />

      <Button onClick={handleUpdate} disabled={loading}>
        {loading ? "Updating..." : "Update Email"}
      </Button>

      {message && <Message error={error}>{message}</Message>}
    </Container>
  );
}