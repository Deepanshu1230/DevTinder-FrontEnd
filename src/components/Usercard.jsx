import React from "react";

const Usercard = ({ user }) => {

    const {firstName,lastName,photoUrl,age,gender,about}=user;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl mt-36 mb-16 rounded-lg">
        <figure className="px-10 pt-10">
          <img src={photoUrl} alt="UserPhoto" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{firstName + " " +lastName}</h2>
          { age&& gender && <p>{age + " , " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions">
            <button className="btn bg-pink-500 rounded-md">Ignore</button>
            <button className="btn bg-blue-500 rounded-md">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercard;
