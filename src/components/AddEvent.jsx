import { useState } from "react";
const AddEvent = () => {
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
    <form>
      <div className="flex gap-3 text-3xl items-center px-5 py-4 backdrop-blur-md text-white">
        <img src="/white-logo.png" alt="logo" className="h-8 pl-6" />
        Spacecon🚀
      </div>
      <div className="h-screen w-screen">
        <div className="flex-col">
          <label htmlFor="eventDate">Date</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
          <label htmlFor="eventTime">Time</label>
          <input
            type="time"
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
            type="text"
            id="eventImage"
            value={eventImage}
            onChange={(e) => setEventImage(e.target.value)}
          />
          <label htmlFor="eventLink">Link</label>
          <input
            type="text"
            id="eventLink"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Create Event
          </button>
        </div>
      </div>
    </form>
  );
};
export default AddEvent;
