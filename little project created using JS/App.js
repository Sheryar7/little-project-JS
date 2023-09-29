// 1) Select the two <buton> elements and store them in wo different variables.
//  - select the first button without adding or using any "id"
//  - select the 2nd button by using an "id"

const firstButtonElement = document.querySelector("button");
const secondButtonElement =document.getElementById("change-bg-btn")

// 2) Add "click" event listener to both buttons (with two different functions).
//    The function should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it is stored.
//    - Output the 2nd button without using the variable in which it is stored.

// function removeParagraph(){
//     console.dir(firstButtonElement);
// }

// function changeBackgroundColor(event){
//     console.dir(event.target);
// }

// firstButtonElement.addEventListener("click",removeParagraph);
// secondButtonElement.addEventListener("click",changeBackgroundColor);

// 3) Now select and store the paragraph mentioned in the text you see on the page
//      (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the mentioned elemenets.
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!

const firstParagraphElement = document.body.children[2].children[1];
console.log(firstParagraphElement);

const thirdParagraphElement = document.body.children[2].children[3];
console.log(thirdParagraphElement);

// 4) Change the function's from (2) such that:
//    - The first button remover the third paragraph (i.e. the <p> prior to it)
//    - The 2nd button changes the backgroung color of the 1st paragraph to blue.

function removeParagraph(){
    thirdParagraphElement.remove();
}

function changeBackgroundColor(event){
    // firstParagraphElement.style.backgroundColor = "#868487";
    // firstParagraphElement.className="blue-bg";
    firstParagraphElement.classList.add("blue-bg");

}

firstButtonElement.addEventListener("click",removeParagraph);
secondButtonElement.addEventListener("click",changeBackgroundColor);

// 5) Solve (4) both the changing the "inline styple" as well as by adding CSS classes
//    Note: you will have to add those to the style.css file first!     
// Task 5 is in task 4