/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="text-center sm:text-center bg-green-500 md:bg-red-500 lg:bg-green-700">
                <h1 className="text-opacity-50">Hi there! Its's me <span className="text-2xl font-bold text-opacity-75">HOSSAIN AHMAD</span></h1>
                <p className="subpixel-antialiased text-xl text-white hover:text-black ">Full Stack Developer</p>
            </div>
            <div className="bg-gray-100 max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl font-serif float-right">
                <p className="text-purple-700 text-opacity-50 hover:text-red-500 ">Tools & Technologies:</p>
                <ul>
                    <li>HTML, CSS </li>
                    <li>JavaScript, C# </li>
                    <li>React, Node, .NET Core</li>
                    <li>Tailwindcss, Bootstrap</li>
                    <li>MongoDB, MSSQL</li>
                    <li>EntityFrameworkCore</li>
                </ul>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl font-serif float-left">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/d.jpg" alt="Man looking at item at a store" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                        <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                        <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Profile;
