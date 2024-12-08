import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

const Events = () => {
  return (
    <div className="h-full w-full bg-[url(https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900)]">
      <Navbar />
      <div className="flex items-center justify-center gap-10 mt-14">
        <EventCard
          title={"Hackathon"}
          date={"13 DEC"}
          time={"5PM"}
          location={"NESCII"}
          description={"Space Themed Hackathon"}
          imageUrl="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900"
          eventURL={"https://unstop.com"}
        />
        <EventCard
          title={"Hackathon"}
          date={"23 DEC"}
          time={"5PM"}
          location={"NESCII"}
          description={"Space Themed Hackathon"}
          imageUrl="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900"
          eventURL={"https://unstop.com"}
        />
        <EventCard
          title={"Hackathon"}
          date={"23 DEC"}
          time={"5PM"}
          location={"NESCII"}
          description={"Space Themed Hackathon"}
          imageUrl="https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-4_1562-749.jpg?t=st=1733640350~exp=1733643950~hmac=f6448d53e276dc75829119413e7692eb6335e09f39b1edec7efd45bbbfab13a6&w=900"
          eventURL={"https://unstop.com"}
        />
      </div>
    </div>
  );
};

export default Events;
