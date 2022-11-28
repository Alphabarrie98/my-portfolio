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
          <p> Games that i love playing are<br></br>
              Football the PPSSPP Version<br></br>
              Brother's in Army<br></br>
              Temple Run


           </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">sport</summary>
          <p> 
             Am a sport lover<br></br>
             My favourity team is Arsenal<br></br>
             My Football Idol is Cristiano Ronaldo 
            
          </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Fun</summary>
          <p><b>jokes i like are </b><br></br>
                Story telling <br></br>
                xplot comedy <br></br>

          </p>
        </details>
        </div>
    )
}