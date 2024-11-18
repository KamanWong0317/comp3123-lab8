import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>Data Entry Form</h2>
        <form className="data-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address1"
              value={formData.address1}
              onChange={handleChange}
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select name="province" value={formData.province} onChange={handleChange}>
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label>Agree Terms & Conditions?</label>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>

        {submittedData && (
          <div className="submission-details">
            <h3>Submission Details</h3>
            <p>Email: {submittedData.email}</p>
            <p>Full Name: {submittedData.name}</p>
            <p>Address: {submittedData.address1}</p>
            <p>City: {submittedData.city}</p>
            <p>Province: {submittedData.province}</p>
            <p>Postal Code: {submittedData.postalCode}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
