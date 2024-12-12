import { useState } from "react";

const CreateEvent = () => {
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
      <div className="p-5">
        <h1 className="text-2xl text-center text-gray-200 font-bold">Create Event</h1>
        <div className="flex flex-col space-y-2 opacity-85">
          <label htmlFor="eventDate" className="text-gray-200">
            Date
          </label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <label htmlFor="eventTime" className="text-gray-200">
            Time
          </label>
          <input
            type="string"
            id="eventTime"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
          <label htmlFor="eventName" className="text-gray-200">
            Name
          </label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <label htmlFor="eventDescription" className="text-gray-200">
            Description
          </label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
          <label htmlFor="eventLocation" className="text-gray-200">
            Location
          </label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
          <label htmlFor="eventImage" className="text-gray-200">
            Image
          </label>
          <input
            type="file"
            id="eventImage"
            accept=".jpg,.jpeg,.png"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
          />
          <label htmlFor="eventLink" className="text-gray-200">
            Unstop Link
          </label>
          <input
            type="text"
            id="eventLink"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-600 text-gray-200 rounded p-2 hover:bg-gray-800"
          >
            Create Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
