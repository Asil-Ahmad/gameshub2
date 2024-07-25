import { Link } from "react-router-dom";
import { profileusers } from ".";
import { clickx } from "../assets/icons";

const ProfileCard = () => {

  
  return (
    <>
      {profileusers.map((user) => (
        <Link to={user.id} className="hover:scale-110 stagger-box transition ease-in-out duration-300">
          <div
            className={`    flex-wrap 
       w-[14.5rem] h-[23.5rem] flex gap-4 items-center justify-start ${user.back} ${user.hov} ${user.animation}
       hover:customshadow
       rounded-2xl`}

       
            key={user.name}
          >
            <div className="flex  items-center flex-col w-full h-full justify-center">
              <img
                src={user.img}
                alt=""
                width={200}
                className="rounded-full flex items-center justify-center"
              />
              <h1 className="text-3xl text-black font-[900] font-nunito mt-4">
                {user.name}
              </h1>
              <p className="text-sm text-gray-900 font-[200] font-nunito mt-4">
                {user.last}
              </p>
              <button
                className=" hover:animate-pulse  hover:scale-110 transition ease-in-out text-black 
              font-semibold font-nunito text-sm hover:bg-white  bg-white/50 p-2 mt-2 rounded-3xl flex items-center gap-2"
              >
                <img
                  src={clickx}
                  width={25}
                  alt=""
                  className="bg-white dark:invert rounded-full"
                />
                {user.login}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
export default ProfileCard;
