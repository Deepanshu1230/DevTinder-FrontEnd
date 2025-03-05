import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/Userfeed";
import Usercard from "./Usercard";
const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();
  async function getfeed() {
    try {
      if (feed) return;
      const res = await axios.get(BASE_URL + "/feed",{
        withCredentials:true
      });
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getfeed();
  }, []);
  return feed &&(<div>
    <Usercard  user={feed[0]}/>
  </div>
  );
};

export default Feed;
