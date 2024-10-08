// FriendsList.jsx
import React from 'react';
import img from '../assets/profile.png'; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';


const FriendsList = ({ friends, error, onDeleteFriend }) => {
  const navigate = useNavigate();
  const navigateToUser = (userId) => {
    navigate(`/profile/${userId}`);
  };


  return (
    <div className="w-full p-4 rounded-lg  shadow-sm mt-2">
      <h2 className="text-xl font-bold mb-4 text-white">Friends</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {friends.length > 0 ? (
        friends.map(friend => (
          <div key={friend._id} className="flex justify-between items-center mb-2 p-2 rounded-2xl border-[#9457eb] hover:border-0 hover:bg-[#4a2574]  border shadow-sm">
            <div className="flex items-center cursor-pointer" onClick={() => navigateToUser(friend._id)}>
              <div className="h-10 w-10">
                <img src={friend.profileImg || img} alt="Friend" className="rounded-full " />
              </div>
              <span className="ml-3 text-white font-bold">{friend.name}</span>
            </div>
            <button
              onClick={() => onDeleteFriend(friend._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <div className="text-white">No friends found.</div>
      )}
    </div>
  );
};

export default FriendsList;
