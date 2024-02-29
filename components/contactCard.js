import React from "react";
import Container from "./container";
import Image from "next/image";

const ContactCard = ({ name, email, imageUrl }) => {
  /**
   * Contact Card Hooks.
   */

  return (
    <div className="rounded-lg shadow-md p-4">
      <div className="flex items-center">
        {/* <Image
          className="w-10 h-10 rounded-full mr-4  object-cover"
          width="50"
          height="50"
          src={imageUrl}
          alt={name}
        /> */}
        {/* <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full mr-4" /> */}
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
