import React from "react";
import Navbar
    from "../components/Navbar";
export default function Contact() {

    return (
        <>
            <Navbar />
            <div class="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
                <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div class="mt-8 overflow-hidden">
                        <div class="grid grid-cols-1 md:grid-cols-2">
                            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        Acme Inc, Street, State,
                                        Postal Code
                                    </div>
                                </div>

                                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                    <svg class="h-8 w-8 text-blue-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        +231777732302
                                    </div>
                                </div>

                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        <a href="https://web.facebook.com/Alpha.barrie.91/">Facebook</a>
                                    </div><br></br>

                                </div>


                                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                        <a href="http://www.Email.com/barriealpha24@gmail.com">barriealpha24@gmail.com</a>
                                    </div><br></br>

                                </div>
                            </div>

                            <form class="p-6 flex flex-col justify-center">
                                <div class="flex flex-col">
                                    <label for="name" class="hidden">Full Name</label>
                                    <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="email" class="hidden">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <div class="flex flex-col mt-2">
                                    <label for="tel" class="hidden">Number</label>
                                    <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                                </div>

                                <button type="submit" class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}