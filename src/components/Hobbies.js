import React from "react";
export default function Hobbies(){
    return(
        <div id="hobbie" 
        class="bg-[#7F669D] h-50 my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-25  border-dashed px-4 font-bold text-md">Hobbies</h3>
        </div>
        
        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800"> Video Games</summary>
          <p>I playing call of duty vidio Games </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">sport</summary>
          <p> Love playing football.</p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Fun</summary>
          <p>i like doimg fun with friends</p>
        </details>
        </div>
    )
}