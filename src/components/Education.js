import React from "react";
export default function Education() {
  return (
    <div id="education"
      class="bg-[gray] h-50 my-6 py-8 rounded-lg border-4">
      <div class="flex justify-center">
        <h3 class="border-4 w-25  border-dashed px-4 font-bold text-md">Education</h3>
      </div>

      <details class="px-6 py-4">
        <summary class="font-bold text-2xl text-gray-800">BlueCrest University College</summary>
        <p>BlueCrest University College Liberia offers BScIT, BBA ,Certificate and Diploma programs in IT.</p>
      </details>

      <details class="px-6 py-4">
        <summary class="font-bold text-2xl text-gray-800">Start School at Salaam </summary>
        <p>I start my studies career at the Salaam Islamic Senior Secondary School.
          <br/> were i start from 4th Grade to 11th Grade before migrating to the Republic
                of Liberia. there i start my 12th Grade
                and now in university thanks to my mentor  
                <b>  Safiatu B. Narteh</b>
          <br/>
        </p>
      </details>

      <details class="px-6 py-4">
        <summary class="font-bold text-2xl text-gray-800">Network & systems administration</summary>
        <p>have your network design done today !</p>
      </details>
    </div>
  )
}