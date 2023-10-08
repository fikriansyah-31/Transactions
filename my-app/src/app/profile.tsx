import React from 'react';
import Image from 'next/image';

interface ProfileProps {
  name: string;
  email: string;
  role: string;
  profileImageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  email,
  role,
  profileImageUrl,
}) => {
  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
      <div className="flex items-center space-x-4">
        <Image
          src={profileImageUrl}
          alt={name}
          className="w-24 h-24 rounded-full"
          width={100}
          height={100}
        />
        <div>
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <p className="text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
