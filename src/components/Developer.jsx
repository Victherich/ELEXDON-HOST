import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DeveloperResetPassword1 from "./DeveloperResetPassword1";
import DeveloperUpdateEmail from "./DeveloperUpdateEmail";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #f5f6fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 12px;
  background: #2f3640;
  color: white;
  text-align: left;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 10px 5px;
  border: none;
  border-radius: 6px;
  background: #0984e3;
  color: white;
  cursor: pointer;

  &:hover {
    background: #74b9ff;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  margin-bottom: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export default function Developer() {
  const [clients, setClients] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const fetchClients = async () => {
    try {
      const res = await fetch(
        `https://elexdonhost.com/api_elexdonhost/get_clients.php?start=${page * 10}&limit=10&search=${search}`,
        {
          headers: {
            Authorization: "Bearer YOUR_ADMIN_SECRET",
          },
        }
      );

      const data = await res.json();
      if (data.success) {
        setClients(data.clients);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [page]);

  return (
    <Container>
      <Title>WHMCS Clients Dashboard</Title>

      <SearchInput
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={fetchClients}>Search</Button>

      <Table>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <Td>{client.id}</Td>
              <Td>{client.name}</Td>
              <Td>{client.email}</Td>
              <Td>{client.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <Button onClick={() => setPage((p) => Math.max(p - 1, 0))}>
          Previous
        </Button>
        <Button onClick={() => setPage((p) => p + 1)}>Next</Button>
      </div>


    <DeveloperResetPassword1/>
    <DeveloperUpdateEmail/>
    </Container>
  );
}
