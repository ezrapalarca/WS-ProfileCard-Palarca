import React from 'react';
import { FaTiktok, FaFacebookF, FaYoutube, FaInstagram, FaThumbsUp, FaCommentAlt, FaShare } from 'react-icons/fa';
import './ProfileCard.css';

import Pic from './profile.jpg';  // <-- since Pic.jpg is directly inside src/

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-sm mx-auto text-center hover:scale-105 transition-transform">
      <img
        src={Pic}
        alt="Your Photo"
        className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500"
      />
      <h2 className="text-2xl font-semibold mt-4">Ezra Palarca</h2>

      <div className="flex justify-center gap-4 mt-4 text-xl text-gray-600">
        <a href="https://www.tiktok.com/@chrisgameslive/video/7037241761818742021?is_from_webapp=1&sender_device=pc&web_id=7330955271973553682" className="hover:text-black"><FaTiktok /></a>
        <a href="https://www.facebook.com/ez.ra.3597" className="hover:text-blue-600"><FaFacebookF /></a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="hover:text-red-600"><FaYoutube /></a>
        <a href="https://www.instagram.com/ezura.jei/" className="hover:text-pink-600"><FaInstagram /></a>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <FaThumbsUp /> Like
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <FaCommentAlt /> Comment
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;