import React, { useState } from 'react';

const Home = () => {
  const [tripDetails, setTripDetails] = useState({
    name: '',
    email: '',
    destination: '',
    budget:'',
    phone:'',
    person:'',
    startDate: '',
    endDate: '',
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the tripDetails to the backend or perform any desired action
    console.log(tripDetails);
    // Reset the form
    setTripDetails({
      name: '',
      email: '',
      destination: '',
      budget:'',
      phone:'',
      person:'',
      startDate: '',
      endDate: '',
      additionalDetails: ''
    });
  };

  return (
    <div className="text-center">
      <h1>Welcome to Enchanting Travels!</h1>
      <form onSubmit={handleSubmit}>
        <div className="label">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={tripDetails.name}
          onChange={handleInputChange}
          required
        />
         </div>
         <div className="label">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={tripDetails.email}
          onChange={handleInputChange}
          required
        />
        </div>
        
         <div className="label">
        <label htmlFor="phone no">phone:</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={tripDetails.phone}
          onChange={handleInputChange}
          required
        />
        </div>

        <div className="label">
        <label htmlFor="budget">Budget Per Person:</label>
        <input
          type="number"
          id="budget"
          name="budget"
          value={tripDetails.budget}
          onChange={handleInputChange}
          required
        />
         </div>

         
         <div className="label">
        <label htmlFor="person">No of person:</label>
        <input
          type="number"
          id="person"
          name="person"
          value={tripDetails.person}
          onChange={handleInputChange}
          required
        />
        </div>
        
        
        <div className="label">
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={tripDetails.destination}
          onChange={handleInputChange}
          required
        />
            </div>

            <div className="label">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={tripDetails.startDate}
          onChange={handleInputChange}
          required
        />
         </div>

       <div className="label">
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={tripDetails.endDate}
          onChange={handleInputChange}
          required
        />
        </div>

        <div className="label">
        <label htmlFor="additionalDetails">Additional Details:</label>
        <textarea
          id="additionalDetails"
          name="additionalDetails"
          value={tripDetails.additionalDetails}
          onChange={handleInputChange}
        ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
