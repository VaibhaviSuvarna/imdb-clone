import React from "react";
import WatchList from "./WatchList";

const MovieCard = ({
  watchlist,
  poster_path,
  name,
  handleAddToWatchList,
  movieObj,
  handleRemoveFromWatchList,
}) => {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[150px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div onClick={() => {
          handleRemoveFromWatchList(movieObj);
        }} className="bg-gray-500/50 m-4 flex justify-center h-8 w-8 items-center rounded-lg">
          <i className=" text-black-600 fa-regular fa-heart"></i>
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddToWatchList(movieObj);
          }}
          className="bg-gray-900 m-4 flex justify-center h-8 w-8 items-center rounded-lg"
        >
          <i className="fa-solid fa-heart text-red-600 fa-lg "></i>
        </div>
      )}

      <div className="w-full text-white  text-center bg-purple-900/40">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
