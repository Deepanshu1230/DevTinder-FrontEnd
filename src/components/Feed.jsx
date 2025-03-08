import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/Userfeed";
import Usercard from "./Usercard";
import image from "../images/Building customer base.gif";
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();
  async function getfeed() {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getfeed();
  }, []);

  if (!feed) return;

  if (feed.length <= 0)
    return (
      <div className="mt-52 mb-52">
        <div>
          <img src={image} className="mt-40 rounded-3xl w-[250px] sm:w-[500px] mx-auto" alt="" />
        </div>

        <div className="text-3xl font-bold pt-10 mx-auto text-gray-400">No new User Found</div>
      </div>
    );

  return (
    feed && (
      <div>
        <Usercard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
