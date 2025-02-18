import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            Track Your Profile
                            <span className="hidden sm:block text-4xl">Developers </span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="" />
                            </svg>
                            &nbsp; Profile
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://img.freepik.com/free-vector/coding-concept-illustration_114360-1155.jpg?ga=GA1.1.1873688199.1716138278&semt=ais_hybrid" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-1812.jpg?t=st=1739884265~exp=1739887865~hmac=62a024dc8dfc608907678395f06ddc8003d032bee4ae2193cc416f788fe46908&w=740" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Your Work</h1>
        </div>
    );
}
