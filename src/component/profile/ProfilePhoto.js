import React from 'react';
import Image from "./profile.jfif";
import '../../App.css';

const ProfilePhoto= ()=> {
  return (
    <div className="ProfilePhoto">
     <img src={Image} alt='profilephoto' />
    </div>
  );
}

export default ProfilePhoto;