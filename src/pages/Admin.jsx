import EventCardAdmin from "../components/EventCardAdmin";
import { Link } from "react-router-dom";
import Adminsidebar from "../components/Adminsidebar";
import { MdAddCircleOutline } from "react-icons/md";

const Admin = () => {
  const events = [
    {
      title: "Hackathon",
      date: "13 DEC",
      time: "5PM",
      location: "NESCII",
      description: "Space Themed Hackathon",
      imageUrl:
        "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
    {
      title: "Workshop",
      date: "23 DEC",
      time: "3PM",
      location: "NESCII",
      description: "Space Themed Workshop",
      imageUrl:
        "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
    {
      title: "Seminar",
      date: "30 DEC",
      time: "1PM",
      location: "NESCII",
      description: "Space Themed Seminar",
      imageUrl:
        "https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900",
      eventURL: "https://unstop.com",
    },
  ];

  return (
    <div className="h-full flex" style={{ backgroundColor: "#2B2F7D" }}>
      <Adminsidebar />

      <div>
        <h1
          style={{ marginLeft: "40%" }}
          className="text-4xl font-bold text-white mb-5 mt-7"
        >
          Upcoming Events
        </h1>

        <div
          style={{ backgroundColor: "#2B2F7D" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6
        bg-gray-100"
        >
          {events.map((event, index) => {
            console.log(event);
            return (
              <EventCardAdmin
                key={index}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            );
          })}
        </div>
        <div className="ml-10 p-10 rounded-xl w-80 max-w-md bg-opacity-40 bg-white transform transition-all duration-300 hover:bg-opacity-20 hover:shadow-2xl">
          <Link to="/create-event">
            <MdAddCircleOutline
              style={{ fontSize: "500%", marginLeft: "35%" }}
            />
       
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admin;
