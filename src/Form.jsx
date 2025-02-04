import React, { useState, useEffect } from "react";
import './App.css';

function Form() {
  const [userData, setUserData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      setIsFormChanged(true);
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userId = `user-${Date.now()}`;
    const dataToSave = { ...userData, userId };

    localStorage.setItem('userData', JSON.stringify(dataToSave));

    setIsFormChanged(false);
    alert('User data saved!');
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isFormChanged) {
        const message = 'You have unsaved changes. Are you sure you want to leave?';
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isFormChanged]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userData.name}
          onChange={handleInputChange}
          required
        />
        <br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={userData.address}
          onChange={handleInputChange}
          required
        />
        <br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
          required
        />
        <br />

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={userData.phone}
          onChange={handleInputChange}
          required
        />
        <br />
        
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Form;
