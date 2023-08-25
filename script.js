const scoreMainContainer=document.getElementById("scoreMainContainer");
const AddDetailsButton=document.getElementById("AddDetailsButton");
console.log(AddDetailsButton);

AddDetailsButton.addEventListener("click",()=>{
   const fName=document.getElementById("fName");
   const lName=document.getElementById("lName");
   const Country=document.getElementById("Country");
   const Score=document.getElementById("Score");

   const scoreBoard=document.createElement("div")
     scoreBoard.classList.add("scoreBoard")

     scoreBoard.innerHTML=`
     <p class="playerName">${fName.value} ${lName.value}</p>
     <p class="country">${Country.value}</p>
     <p class="score">${Score.value}</p>
     <p class="deleteIcon">&#x1f5d1;</p>
   `;

   scoreMainContainer.appendChild(scoreBoard)
   fName.value="";
   lName.value="";
   Country.value="";
   Score.value="";
   sortBoard();
   deleteElemnt();
});

function sortBoard(){
   const ScoreBoard=document.querySelectorAll(".scoreBoard")
   const arr=[];
   ScoreBoard.forEach((ele)=>arr.push(ele));
   const sortedArray=arr.map((ele)=>{
       return ele
   })
   .sort((a,b)=>{
      let runOfManOne=parseInt(a.children[2].textContent)
      let runOfManTwo=parseInt(b.children[2].textContent)

      if(runOfManOne>runOfManTwo){return -1}
      if(runOfManOne<runOfManTwo){return 1}
   });

   console.log(sortedArray);
   sortedArray.forEach((ele)=>{
      scoreMainContainer.append(ele)
   })
}


function deleteElemnt() {
   const deleteIcon = document.querySelectorAll(".deleteIcon");
   deleteIcon.forEach((ele)=>{
     ele.addEventListener("click", (e)=>{
         return e.target.parentElement.remove()
     })
   })
 }