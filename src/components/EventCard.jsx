import { Calendar, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const EventCard = ({ title, date, time, location, description, imageUrl, eventURL }) => {
  return (
    <div className="mx-5 bg-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-5 h-5 mr-2 text-blue-500" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2 text-green-500" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-5 h-5 mr-2 text-red-500" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
            <Link to={eventURL}>Click Here to Register 🚀</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
