document.addEventListener("DOMContentLoaded", function () {
    // DOM Elements
    let counter = document.getElementById("counter");
    let plusBtn = document.getElementById("plus");
    let minusBtn = document.getElementById("minus");
    let heartBtn = document.getElementById("like");
    let pauseBtn = document.getElementById("pause");
    let likesList = document.getElementById("likes-list");
    let commentForm = document.getElementById("comment-form");
    let commentInput = document.getElementById("comment-input");
    let commentsList = document.getElementById("comments-list");

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
            timer = setInterval(incrementCounter, 1000);
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
    heartBtn.addEventListener("click", () => {
        let currentCount = parseInt(counter.innerHTML);
        if (!likes.includes(currentCount)) {
            likes.push(currentCount);
            let li = document.createElement("li");
            li.innerHTML = currentCount;
            likesList.appendChild(li);
        }
    });
    // Comment submit form
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let comment = commentInput.value;
        comments.push(comment);
        let li = document.createElement("li");
        li.innerHTML = comment;
        commentsList.appendChild(li);
        commentInput.value = "";
    });
});
