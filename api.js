function addData() {
    var movie = document.getElementById("movie");
    var actor = document.getElementById("actor");
    var actress = document.getElementById("actress");
    var review = document.getElementById("review");
    var rating = document.getElementById("rating");

    // Validation: Ensure all fields are filled before proceeding
    if (!movie.value || !actor.value || !actress.value || !review.value || !rating.value) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    postData(movie.value, actor.value, actress.value, review.value, rating.value);
}

function postData(movie, actor, actress, review, rating) {
    var url = "http://localhost:3000/Movies";
    var options = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({ movie, actor, actress, review, rating })
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) {
                console.log("Data Added");
                alert("Data added successfully");
                displayData(); // Refresh the displayed data
            } else {
                throw new Error("Failed to add data.");
            }
        })
        .catch(err => {
            alert("Something went wrong. Please try again.");
            console.error(err);
        });
}

// function displayData() {
//     var container = document.getElementById("container");
//     container.innerHTML = ""; // Clear previous data before adding new ones

//     fetch("http://localhost:3000/Movies")
//         .then(response => response.json())
//         .then(data => {
//             for (var obj of data) {
//                 var item = document.createElement("div");
//                 item.className = "item m-2 p-2 fs-5 text-uppercase border border-warning rounded rounded-2";

//                 // Creating paragraph elements
//                 var moviePara = document.createElement("p");
//                 var actorPara = document.createElement("p");
//                 var actressPara = document.createElement("p");
//                 var reviewPara = document.createElement("p");
//                 var ratingPara = document.createElement("p");

//                 // Setting text values
//                 moviePara.innerText = "Movie: " : obj.movie;
//                 actorPara.innerText = "Actor: " : obj.actor;
//                 actressPara.innerText = "Actress: " :obj.actress;
//                 reviewPara.innerText = "Review: " : obj.review;
//                 ratingPara.innerText = "Rating: " : obj.rating;

//                 // Appending elements
//                 item.appendChild(moviePara);
//                 item.appendChild(actorPara);
//                 item.appendChild(actressPara);
//                 item.appendChild(reviewPara);
//                 item.appendChild(ratingPara);

//                 container.appendChild(item);
//             }
//         })
//         .catch(err => {
//             console.error("Error fetching data:", err);
//         });
// }

// // Load initial data
// displayData();















