
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import supportImg from '../Images/helpdesk.jpg'; // Replace with your actual image
import ticketImg from '../Images/helpdesk2.jpg'; // Another support image
import Swal from 'sweetalert2';

const PageContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
  color: #1e293b;
  padding: 60px 20px;

  
`;

const HeroSection = styled.section`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 60px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2B32B2;
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  color: #475569;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  box-sizing:border-box;

  h2{
    color:#2B32B2;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  box-sizing: border-box;

`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
  min-height: 150px;
  margin-bottom: 1.25rem;
  box-sizing: border-box;

`;

const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1.25rem;
  border: 1px solid #cbd5e1;
  font-size: 1rem;
`;

const FileInput = styled.input`
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background: #2b32b2;
  color: white;
  padding: 1rem 2rem;
  border: none;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1e2a91;
  }
`;

const Sidebar = styled.div`
  background: #ffffff;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2B32B2;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.95rem;
    color: #475569;
  }
`;

const SupportPage = () => {
  const [departments, setDepartments]=useState([]);
  // console.log(departments)
   const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    department: '',
    priority: 'Medium',
    message: '',
    file: null,
  });


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };



   const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.id) {
      Swal.fire('Login Required', 'Please log in to submit a ticket.', 'warning');
      return;
    }

    if (!form.subject || !form.message || !form.department) {
      Swal.fire('Missing Fields', 'Please complete all required fields.', 'info');
      return;
    }

    const formData = new FormData();
    formData.append('clientid', user.id);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('subject', form.subject);
    formData.append('deptid', form.department);
    formData.append('priority', form.priority);
    formData.append('message', form.message);
    if (form.file) formData.append('attachments[]', form.file);

    Swal.fire({ title: 'Submitting...', allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    try {
      const res = await fetch('https://www.elexdonhost.com/api_elexdonhost/open_ticket.php', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        Swal.fire('Success', 'Your ticket has been submitted!', 'success');
        setForm({
          name: '',
          email: '',
          subject: '',
          department: '',
          priority: 'Medium',
          message: '',
          file: null,
        });
      } else {
        Swal.fire('Error', result.message || 'Failed to submit ticket.', 'error');
      }
    } catch (err) {
      Swal.fire('Error', 'Failed to send ticket. Try again later.', 'error');
    }
  };



async function fetchDepartments() {
  try {
    const response = await fetch(
      'https://www.elexdonhost.com/api_elexdonhost/get_support_departments.php'
    );
    const data = await response.json();

    if (data.success) {
      setDepartments(data.departments); // returns an array of departments
    } else {
      console.error('Failed to load departments:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching departments:', error);
    return [];
  }
}


useEffect(()=>{
  fetchDepartments();
},[])

  return (
    <PageContainer>
      <HeroSection>
        <Title>We're Here to Help</Title>
        <SubTitle>
          Whether you're stuck, curious, or planning something big — the Elexdon Host support team is ready to assist you 24/7. Submit a ticket and we’ll get back to you as fast as lightning.
        </SubTitle>
      </HeroSection>

      <ContentGrid>
         <form onSubmit={handleSubmit}>
      <FormCard>
        <h2>Submit a Support Ticket</h2>

        <Input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address" required />
        <Input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required />

        <Select name="department" value={form.department} onChange={handleChange} required>
          <option value="">-- Select Department --</option>
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </Select>

        <Select name="priority" value={form.priority} onChange={handleChange}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Select>

        <TextArea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Type your message here..."
          required
        />

        <FileInput type="file" name="file" onChange={handleChange} />

        <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
          Allowed file types: .jpg, .gif, .jpeg, .png, .zip, .pdf, .xls, .docx, .txt
        </p>

        <Button type="submit">Submit Ticket</Button>
      </FormCard>
    </form>

        <Sidebar>
          <img src={ticketImg} alt="Support illustration" />
          <h3>Need Immediate Help?</h3>
          <p>Check our knowledge base or chat with us live.</p>
          <img src={supportImg} alt="Live support" />
          <h3>24/7 Expert Support</h3>
          <p>Real humans. Real fast. No bots. Your success is our priority.</p>
        </Sidebar>
      </ContentGrid>
    </PageContainer>
  );
};

export default SupportPage;
