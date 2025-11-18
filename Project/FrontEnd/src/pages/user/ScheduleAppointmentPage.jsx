import React, { useState } from 'react';
import axios from 'axios';

// Mock data
const agents = [
  { id: 1, name: 'John Doe - Health Specialist' },
  { id: 2, name: 'Jane Smith - Auto & Property' },
  { id: 3, name: 'Mike Lee - General Inquiries' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'
];

// Helper function to convert 12-hour time to 24-hour format
const timeTo24 = (time12h) => {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');
  if (hours === '12') {
    hours = '00';
  }
  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }
  return `${hours.toString().padStart(2, '0')}:${minutes}`;
};


const ScheduleAppointmentPage = () => {
  const [agent, setAgent] = useState(agents[0].id);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]); // Today
  const [time, setTime] = useState(timeSlots[0]);
  const [reason, setReason] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You must be logged in to schedule an appointment.');
        setLoading(false);
        return;
      }

      // Combine date and time into a proper ISO string
      const appointmentTime = new Date(`${date}T${timeTo24(time)}:00`);

      const appointmentDetails = {
        agentId: agent,
        appointmentTime: appointmentTime.toISOString(),
        reason: reason,
        // userId is automatically taken from the token on the backend
      };

      // --- THIS IS THE BACKEND INTEGRATION ---
      // We will create this API endpoint in the guide
      const response = await axios.post(
        'http://localhost:8080/api/user/appointments', 
        appointmentDetails, 
        {
          headers: { 'Authorization': `Bearer ${token}` }
        }
      );

      setSuccess('Appointment scheduled successfully!');
      setReason(''); // Clear form

    } catch (err) {
      setError('Failed to schedule appointment. Please try again.');
      console.error('Appointment scheduling error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Schedule an Appointment</h1>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl">
        <form onSubmit={handleSubmit} className="p-6 space-y-4">

          {error && (
            <div className="p-3 text-sm text-center text-red-800 bg-red-100 rounded-lg">
              {error}
            </div>
          )}
          {success && (
            <div className="p-3 text-sm text-center text-green-800 bg-green-100 rounded-lg">
              {success}
            </div>
          )}

          {/* Select Agent */}
          <div>
            <label htmlFor="agent" className="block text-sm font-medium text-gray-700">Select Agent</label>
            <select
              id="agent"
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
              className="block w-full h-10 pl-3 pr-10 mt-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              {agents.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Date */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]} // Cannot select past dates
                className="mt-1 block w-full h-10 px-3 border border-gray-300 rounded-md"
              />
            </div>
            {/* Time Slot */}
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Time Slot</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="block w-full h-10 pl-3 pr-10 mt-1 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                {timeSlots.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reason for Appointment */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for Appointment
            </label>
            <textarea
              id="reason"
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
              placeholder="e.g., 'Discuss new health policy options', 'Questions about my auto claim CLM-50089'..."
              required
            />
          </div>
          
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full h-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
            >
              {loading ? 'Scheduling...' : 'Schedule Appointment'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ScheduleAppointmentPage;