import React from 'react';
import Profile from '@/app/profile';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    role: 'Sales Lead',
    profileImageUrl: '/assets/google.png', 
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Profile {...user} />
    </div>
  );
};

export default UserProfile;
