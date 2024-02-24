import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import Header from "./Header";
import Footer from "./Footer";

import { NavLink } from "react-router-dom";
function Tv() {
  const [tvList, setTvList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getLatestTv.then((resp) => {
      console.log(resp.data.results);
      setTvList(resp.data.results);
    });
  };
  return (
    <>
      <div className="flex static">
        <div className="hidden md:block fixed">
          <Header />
        </div>
        <div className="pt-5 pl-2 md:pl-20">
          <h2 className="text-xl pl-3">Latest TV shows</h2>
          <div className=" flex  flex-wrap pl-3">
            {tvList.map((item) => (
              <NavLink to="/Details" state={{ item: item }}>
                {" "}
                <img
                  src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                  className="h-[100px] md:h-[200px] mr-2 rounded-md hover:border-[3.5px] border-gray-300 p-2"
                />
              </NavLink>
            ))}
          </div>
          <div className="pt-[50px] md:pt-[150px]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tv;
