import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const Activity = () => {
  const activities = [
    {
      id: 1,
      activity: "Go",
      description: "Explore local trails and enjoy the outdoors.",
    },
    {
      id: 2,
      activity: "Read ",
      description:
        "Find a quiet spot and dive into a new novel or an old favorite.",
    },
    {
      id: 3,
      activity: "Attend",
      description: "Learn to cook a new cuisine with a professional chef.",
    },
    {
      id: 4,
      activity: "Visit ",
      description: "Discover history, art, or science at a museum.",
    },
    {
      id: 5,
      activity: "Watch",
      description:
        "Enjoy a new blockbuster or an indie film at home or in a theater.",
    },
    {
      id: 6,
      activity: "Paint",
      description: "Grab some brushes and express yourself on canvas.",
    },
    {
      id: 7,
      activity: "Go",
      description: "Take your bike out for a ride in the park or on a trail.",
    },
    {
      id: 8,
      activity: "Play",
      description: "Challenge friends or family to a board game night.",
    },
    {
      id: 9,
      activity: "Attend",
      description: "Enjoy live music from a band or solo artist you like.",
    },
    {
      id: 10,
      activity: "Start",
      description:
        "Plant some flowers, herbs, or vegetables in your yard or in containers.",
    },
  ];
  return (
    <div className="flex items-center justify-start overflow-x-auto max-container mt-2 mb-[20px] w-full gap-2">
      {activities.map((item) => (
        <Link key={item.id}>
          <Button className=" bg-black ">{item.activity}</Button>
        </Link>
      ))}
    </div>
  );
};

export default Activity;
