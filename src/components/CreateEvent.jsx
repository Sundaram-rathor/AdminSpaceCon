import { useState } from "react";

const Admin = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventLink, setEventLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      name: eventName,
      description: eventDescription,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      image: eventImage,
      link: eventLink,
    };
    console.log(event);

    // handle backend here
  };

  return (
    <div>
      <div className="h-[80vh] p-3 text-gray-300">
        <div className="flex flex-col space-y-2 opacity-85">
          <label htmlFor="eventDate">Date</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <label htmlFor="eventTime">Time</label>
          <input
            type="string"
            id="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <label htmlFor="eventName">Name</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <label htmlFor="eventDescription">Description</label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
          <label htmlFor="eventLocation">Location</label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
          <label htmlFor="eventImage">Image</label>
          <input
            type="file"
            id="eventImage"
            accept=".jpg,.jpeg,.png"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
          />
          <label htmlFor="eventLink">Unstop Link</label>
          <input
            type="text"
            id="eventLink"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-600 rounded p-2 hover:bg-gray-700"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
