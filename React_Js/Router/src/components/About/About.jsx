import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://img.freepik.com/premium-vector/hand-drawn-flat-quantum-illustration_108061-1449.jpg?w=740"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React Developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        A React Developer specializes in building dynamic and interactive user interfaces using React.js. They create reusable components, manage state efficiently, and integrate APIs to enhance web applications. Proficiency in JavaScript, React Hooks, routing, and performance optimization is essential. React developers often work with backend technologies, version control, and deployment tools to deliver seamless user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}