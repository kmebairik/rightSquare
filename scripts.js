"use strict";

//MenuToggler
menuToggler.addEventListener('click', ev => {
    menu.classList.toggle('open');
    menuToggler.textContent = menuToggler.textContent == "x" ? "=" : "x";
});




//SlideShow
document.addEventListener('DOMContentLoaded', () => {
  let slideshowContainer = document.querySelector('.slideshow');

  if (slideshowContainer !== null) {
    let slides = Array.from(slideshowContainer.querySelectorAll('.slide'));
    let prevButton = slideshowContainer.querySelector('.prev');
    let nextButton = slideshowContainer.querySelector('.next');
    let currentSlideIndex = 0;
    let slideshowInterval = 3000; // Updated value
    let slideshowTimer = setInterval(showNextSlide, slideshowInterval);

    prevButton.addEventListener('click', showPreviousSlide);
    nextButton.addEventListener('click', showNextSlide);
    showSlide(currentSlideIndex);

    function showSlide(index) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });

      slides[index].classList.add('active');
      currentSlideIndex = index;
    }

    function showNextSlide() {
      let nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      showSlide(nextSlideIndex);
    }

    function showPreviousSlide() {
      let previousSlideIndex = currentSlideIndex - 1;
      if (previousSlideIndex < 0) {
        previousSlideIndex = slides.length - 1;
      }
      showSlide(previousSlideIndex);
    }
  }
});





//Property Search Form
const maxPriceRange = document.getElementById('maxPriceRange');
const maxPrice = document.getElementById('maxPrice');
const minPriceRange = document.getElementById('minPriceRange');
const minPrice = document.getElementById('minPrice');

// Update max price when min price changes
minPriceRange.addEventListener('input', ev => {
  minPrice.value = minPriceRange.value;
  // Ensure max price is not less than min price
  if (parseInt(maxPrice.value) < parseInt(minPrice.value)) {
    maxPrice.value = minPrice.value;
    maxPriceRange.value = minPriceRange.value;
  }
});

minPrice.addEventListener('input', ev => {
  minPriceRange.value = minPrice.value;
  // Ensure max price is not less than min price
  if (parseInt(maxPrice.value) < parseInt(minPrice.value)) {
    maxPrice.value = minPrice.value;
    maxPriceRange.value = minPriceRange.value;
  }
});

// Update min price when max price changes
maxPriceRange.addEventListener('input', ev => {
  maxPrice.value = maxPriceRange.value;
  // Ensure max price is not less than min price
  if (parseInt(maxPrice.value) < parseInt(minPrice.value)) {
    minPrice.value = maxPrice.value;
    minPriceRange.value = maxPriceRange.value;
  }
});

maxPrice.addEventListener('input', ev => {
  maxPriceRange.value = maxPrice.value;
  // Ensure max price is not less than min price
  if (parseInt(maxPrice.value) < parseInt(minPrice.value)) {
    minPrice.value = maxPrice.value;
    minPriceRange.value = maxPriceRange.value;
  }
});


const maxBedRange = document.getElementById('maxBedRange');
const maxBed = document.getElementById('maxBed');
const minBedRange = document.getElementById('minBedRange');
const minBed = document.getElementById('minBed');

maxBedRange.addEventListener('input', ev => {
  maxBed.value = maxBedRange.value;

  if (parseInt(maxBed.value) < parseInt(minBed.value)) {
    minBed.value = maxBed.value;
    minBedRange.value = maxBedRange.value;
  }

});

maxBed.addEventListener('input', ev => {
  maxBedRange.value = maxBed.value;

  if (parseInt(maxBed.value) < parseInt(minBed.value)) {
    minBed.value = maxBed.value;
    minBedRange.value = maxBedRange.value;
  }

});

minBedRange.addEventListener('input', ev => {
  minBed.value = minBedRange.value;
  if (parseInt(maxBed.value) < parseInt(minBed.value)) {
    maxBed.value = minBed.value;
    maxBedRange.value = minBedRange.value;
  }
});

minBed.addEventListener('input', ev => {
  minBedRange.value = minBed.value;
  if (parseInt(maxBed.value) < parseInt(minBed.value)) {
    maxBed.value = minBed.value;
    maxBedRange.value = minBedRange.value;
  }
});

const maxBathRange = document.getElementById('maxBathRange');
const maxBath = document.getElementById('maxBath');
const minBathRange = document.getElementById('minBathRange');
const minBath = document.getElementById('minBath');

maxBathRange.addEventListener('input', ev => {
  maxBath.value = maxBathRange.value;
  if (parseInt(maxBath.value) < parseInt(minBath.value)) {
    minBath.value = maxBath.value;
    minBathRange.value = maxBathRange.value;
  }
});

maxBath.addEventListener('input', ev => {
  maxBathRange.value = maxBath.value;
  if (parseInt(maxBath.value) < parseInt(minBath.value)) {
    minBath.value = maxBed.value;
    minBathRange.value = maxBathRange.value;
  }
});


minBathRange.addEventListener('input', ev => {
  minBath.value = minBathRange.value;
  if (parseInt(maxBath.value) < parseInt(minBath.value)) {
    maxBath.value = minBath.value;
    maxBathRange.value = minBathRange.value;
  }

});

minBath.addEventListener('input', ev => {
  minBathRange.value = minBath.value;
  if (parseInt(maxBath.value) < parseInt(minBath.value)) {
    maxBath.value = minBath.value;
    maxBathRange.value = minBathRange.value;
  }
  
});






//Search Result
const searchForm = document.getElementById("propertySearch");
const searchResults = document.getElementById("searchResults");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submit behavior

  // retrieve user input from form fields
  const listingType = document.querySelector('input[name="listingType"]:checked').value;
  const area = document.getElementById("area").value.trim();
  const propertyType = document.getElementById("propertyType").value;
  const furnishedType = document.getElementById("furnishedType").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const minBed = document.getElementById("minBed").value;
  const maxBed = document.getElementById("maxBed").value;
  const minBath = document.getElementById("minBath").value;
  const maxBath = document.getElementById("maxBath").value;

  // construct URL for API request
  const apiUrl = "https://raw.githubusercontent.com/kmebairik/RightSquare/main/properties.json";
  let searchParams = {};
  if (listingType !== "all") {
    searchParams.listingType = listingType;
  }
  if (area !== "") {
    searchParams.area = area;
  }
  if (propertyType !== "all") {
    searchParams.propertyType = propertyType;
  }
  if (furnishedType !== "all") {
    searchParams.furnishedType = furnishedType;
  }
  if (minPrice !== "") {
    searchParams.minPrice = minPrice;
  }
  if (maxPrice !== "") {
    searchParams.maxPrice = maxPrice;
  }
  if (minBed !== "") {
    searchParams.minBed = minBed;
  }
  if (maxBed !== "") {
    searchParams.maxBed = maxBed;
  }
  if (minBath !== "") {
    searchParams.minBath = minBath;
  }
  if (maxBath !== "") {
    searchParams.maxBath = maxBath;
  }

  const apiRequestUrl = `${apiUrl}?${new URLSearchParams(searchParams)}`;

  // retrieve data from API and display results
  fetch(apiRequestUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        searchResults.innerHTML = "<p>No results found.</p>";
      } else {
        // create HTML for search results
        let resultsHtml = "";
        data.forEach((property) => {
          resultsHtml += `

          <br>
          <div class="property">
            <p class="property__id">Property ID: ${property.id}</p>
            <div class="property__info">
              <img src="${property.pictures}" class="property__img">
              <div class="property__address">
                <p>${property.address.firstAddressLine}, ${property.address.secondAddressLine}, <br> ${property.address.city}, ${property.address.postcode}</p>
              </div>
              <div class="property__details">
              <p class="property__detail"><strong>Listing Type:</strong> ${property.listingType}</p>
              <p class="property__detail"><strong>Property Type:</strong> ${property.propertyType}</p>
              <p class="property__detail"><strong>Furnished Type:</strong>   ${property.furnishedType}</p>
              <p class="property__detail"><strong><i class="fa fa-bed"></i>:</strong> ${property.beds}</p>
              <p class="property__detail"><strong><i class="fa fa-bath"></i>:</strong> ${property.baths}</p>
              </div>
              <p class="property__price"><strong>Price:</strong> £${property.price}</p>
            </div>
            <button class="see-more-btn">See more</button>

          </div>
          `;
        });
        searchResults.innerHTML = resultsHtml;
      }
    })
    .catch((error) => {
      console.error("Error retrieving search results:", error);
      searchResults.innerHTML = "<p>Error retrieving search results.</p>";
    });

});

