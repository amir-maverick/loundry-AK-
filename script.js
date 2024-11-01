
    // Array containing data for each slide
    const slides = [
        {
            img: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila1.png",
            text: "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
            stars: "⭐⭐⭐⭐",
            name: "Rupaya"
        },
        {
            img: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila2.png",
            text: "The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
            stars: "⭐⭐⭐⭐",
            name: "Rupaya"
        },
        {
            img: "https://preview.colorlib.com/theme/laundry/assets/img/gallery/testimonila3.png",
            text:"The automated process starts as soon as your clothes go into the machine. The outcome is gleaming clothes!",
            stars: "⭐⭐⭐⭐",
            name: "Rupaya"
        }
    ];

    let currentIndex = 0;

    // Select elements to update
    const profileImg = document.getElementById("profile-img");
    const testimonialText = document.querySelector(".testimonial-text");
    const stars = document.querySelector(".stars");
    const name = document.querySelector(".name");

    // Function to update the slide based on the index
    function updateSlide(index) {
        profileImg.src = slides[index].img;
        testimonialText.textContent = slides[index].text;
        stars.textContent = slides[index].stars;
        name.textContent = slides[index].name;
    }

    // Function to change the slide based on the direction
    function changeImage(direction) {
        currentIndex = (currentIndex + direction + slides.length) % slides.length;
        updateSlide(currentIndex);
    }

    // Initialize with the first slide
    updateSlide(currentIndex);

