// Function for basic arithmetic operations
function performArithmetic() {
    event.preventDefault();
    var operation = document.getElementById("operation").value;
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = performArithmeticOperation(operation, num1, num2);
    document.getElementById("result").textContent = "Result: " + result;
}

function performArithmeticOperation(operation, a, b) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return 'Invalid operation';
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error: Division by zero';
    }
}

// Function for button text change
function changeText() {
    var paragraph = document.getElementById("text");
    paragraph.textContent = "New text after button click!";
}

// Function for form validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Name and Email must be filled out");
        return false;
    }

    return true;
}

// Function for list manipulation
document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("addButton");
    var removeButton = document.getElementById("removeButton");
    var list = document.getElementById("list");

    addButton.addEventListener("click", function() {
        var newItem = document.createElement("li");
        newItem.textContent = "New item";
        list.appendChild(newItem);
    });

    removeButton.addEventListener("click", function() {
        var lastItem = list.lastElementChild;
        if (lastItem) {
            list.removeChild(lastItem);
        }
    });
});

// Function for basic slideshow
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
    var totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        slides[index].style.display = "block";
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for next and previous buttons
    document.getElementById("nextButton").addEventListener("click", nextSlide);
    document.getElementById("prevButton").addEventListener("click", prevSlide);
});
