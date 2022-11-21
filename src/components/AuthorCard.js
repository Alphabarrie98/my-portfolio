import React, { useState } from "react";
export default function AuthorCard({ isActive, setIsActive }) {
  function handleActive(e) {
    e.preventDefault();

    setIsActive({
      active: true,
      name: e.target.id
    })
  }
  return (
    <div id="intro"
      class="bg-[#3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
      <div id="avatar" class="flex justify-center py-2">
        <img class="w-40" src="https://api.multiavatar.com/Alp.svg " alt="JB image" />
      </div>
      <div id="content" class="prose lg:prose-xl px-2">
        <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">Alpha Barrie</h1>
        <small class="text-center block text-md text-gray-800">Networking Engineer Team-Worker &amp; Database administration</small>
        <p class="text-center text-lg text-auto-800">Hi! I'm Alpha Barrie a young Networking Engineer  <b> <i>System administration.</i></b>

        </p>
        <div className="p-6 max-w-full mx-auto">
          <ul className="flex justify-center items-center gap-4">
            <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "education" && 'bg-[#70B198]'}`}>
              <a href="#education" onClick={handleActive} id="education" className="font-roboto font-bold text-xl">Education</a>
            </li>
            <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "work" && 'bg-[#70B198]'}`}>
              <a href="#work" onClick={handleActive} id="work" className="font-roboto text-xl italic">Work</a>
            </li>
            <li className={`border border-gray-500 rounded-lg p-2 ${isActive.active && isActive.name == "hobbies" && 'bg-[#70B198]'}`}>
              <a href="#hobbies" onClick={handleActive} id="hobbies" className="font-roboto font-bold text-xl">Hobbies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}