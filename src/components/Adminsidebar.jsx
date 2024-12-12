import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Adminsidebar = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex justify-start items-center px-10 py-5 backdrop-blur-md text-white">
        <div className="flex gap-3 text-3xl items-center">
          <img src="/white-logo.png" alt="logo" className="h-8" />
          Spacecon🚀
        </div>
      </div>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[15rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List className="flex gap-5">
          <ListItem className="p-3">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Dashboard
            </Typography>
          </ListItem>
          <hr className="my-2 border-blue-gray-50" />

          <ListItem className="p-3">
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Events
            </Typography>
          </ListItem>
          <ListItem className="p-3">
            <ListItemPrefix>
              <MdAddCircleOutline className="h-5 w-5" />
            </ListItemPrefix>
            <Typography color="blue-gray" className="mr-auto font-normal">
              Add Event
            </Typography>
          </ListItem>

          <hr className="my-2 border-blue-gray-50" />

          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </div>
  );
};
export default Adminsidebar;
