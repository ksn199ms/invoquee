import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Profile from '../../components/Profile/Profile';

const ProfilePage = () => {
    return (
        < div className="flex min-h-screen">
        <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar />
        </div>

        <div className="flex-1 p-4 md:p-6 bg-gray-100">
        <Profile />
      </div>
       </div>
    );
}

export default ProfilePage;
