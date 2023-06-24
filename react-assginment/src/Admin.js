import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    // Fetch enquiries from the backend or any data source
    // For now, let's simulate some dummy data
    const dummyEnquiries = [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        destination: 'Paris',
        startDate: '2023-07-01',
        endDate: '2023-07-10',
        additionalDetails: 'Looking for hotel recommendations'
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        destination: 'Rome',
        startDate: '2023-08-15',
        endDate: '2023-08-22',
        additionalDetails: 'Interested in guided tours'
      }
    ];

    setEnquiries(dummyEnquiries);
  }, []);

  return (
    <div>
      <h1>Admin Page - Enquiries</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Destination</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Additional Details</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td>{enquiry.id}</td>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>{enquiry.destination}</td>
              <td>{enquiry.startDate}</td>
              <td>{enquiry.endDate}</td>
              <td>{enquiry.additionalDetails}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
