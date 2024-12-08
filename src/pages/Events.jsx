import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

const Events = () => {
  // dummy data to be fetched from backend
  const events = [
    {
      title: "Hackathon",
      date: "13 DEC",
      time: "5PM",
      location: "NESCII",
      description: "Space Themed Hackathon",
      imageUrl: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
    {
      title: "Workshop",
      date: "23 DEC",
      time: "3PM",
      location: "NESCII",
      description: "Space Themed Workshop",
      imageUrl: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
    {
      title: "Seminar",
      date: "30 DEC",
      time: "1PM",
      location: "NESCII",
      description: "Space Themed Seminar",
      imageUrl: "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
  ];

  return (
    <div className="h-full w-full bg-[url(https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900)] bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-10 mt-8 px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Upcoming Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              imageUrl={event.imageUrl}
              eventURL={event.eventURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
