document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    let counter = document.getElementById("counter");
    let plusBtn = document.getElementById("plus");
    let minusBtn = document.getElementById("minus");
    let heartBtn = document.getElementById("heart");
    let pauseBtn = document.getElementById("pause");
    let heartList = document.getElementById("likes-list");
    let commentForm = document.getElementById("comment-form");
    let commentInput = document.getElementById("comment-input");
    let commentsList = document.getElementById("comments-list");
    let heartCount = 0;

    // Variables
    let count = 0;
    let isPaused = false;
    let likes = [];
    let comments = [];
    let timer = null;

    // Increment function
    function increment() {
        if (!isPaused) {
            count++;
            counter.innerHTML = count;
        }
    }

    // Decrement function(-,+)
    function decrement() {
        if (!isPaused) {
            count--;
            counter.innerHTML = count;
        }
    }

    // Pause, eventListeners
    plusBtn.addEventListener("click", increment);
    minusBtn.addEventListener("click", decrement);
    pauseBtn.addEventListener("click", function () {
        isPaused = !isPaused;
        if (isPaused) {
            pauseBtn.innerHTML = "Resume";
        } else {
            pauseBtn.innerHTML = "Pause";
        }
    });

    // Timer paused
    pauseBtn.addEventListener("click", () => {
        if (isPaused) {
            // Resume
            timer = setInterval(increment, 0);
            pauseBtn.textContent = "Pause";
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            likeBtn.disabled = false;
        } else {
            // Pause
            clearInterval(timer);
            pauseBtn.textContent = "Resume";
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            likeBtn.disabled = true;
        }
        isPaused = !isPaused;
    });
    
    // Heart Functions btn
    let numberClicked = 0;
    let likedList = document.querySelector(".likes")
    heartBtn.addEventListener("click", () => {
     let newParagraph = document.createElement("p");
     likedList.appendChild(newParagraph);


        let count = parseInt(counter.textContent);
        
        if(numberClicked === count) {
            heartCount ++;
            newParagraph.textContent = (`you have liked ${count} ${heartCount} times`)


        }else {
            heartCount = 0;
            heartCount ++;
            numberClicked = count;
            newParagraph.textContent = (`you have liked ${count} ${heartCount} times`)
        }
        
        
    //     Likes()
    //     let currentCount = parseInt(counter.innerHTML);
    //    if (!likes.includes(currentCount)) {
    //        likes.push(currentCount);
    //        let li = document.createElement("li");
    //        li.innerHTML = currentCount;
    //        likesList.appendChild(li);
    //    }
    });
    
    // Likes Function
    
        function Likes() {
            heartList.innerHTML = "";
            for (let num in heart) {
                let li = document.createElement("li");
                li.innerText = ` ${likes[num]}`;
                heartList.appendChild(li);
            }
        }

    

    // Comment submit form
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("left a comment");
        let comment = commentInput.value;
        comments.push(comment);
        let li = document.createElement("li");
        li.innerHTML = comment;
        commentsList.appendChild(li);
        commentInput.value = "";
    });
});
