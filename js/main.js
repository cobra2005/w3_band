const slider = document.querySelector('.slider');
const images = [
    {
        url: 'https://www.w3schools.com/w3images/la.jpg',
        html: `
            <div class="slider__text-content">
                <h3 class="slider__text-heading">Los Angeles</h3>
                <b class="slider__text-description">We had the best time playing at Venice Beach!</b>
            </div>
        `,
    },
    {
        url: 'https://www.w3schools.com/w3images/ny.jpg',
        html: `
            <div class="slider__text-content">
                <h3 class="slider__text-heading">New York</h3>
                <b class="slider__text-description">The atmosphere in New York is lorem ipsum.</b>
            </div>
        `,
    },
    {
        url: 'https://www.w3schools.com/w3images/chicago.jpg',
        html: `
            <div class="slider__text-content">
                <h3 class="slider__text-heading">Chicago</h3>
                <b class="slider__text-description">Thank you, Chicago - A night we won't forget.</b>
            </div>
        `,
    },
];

// Current image location
let index = 0;
slider.innerHTML = images[0].html;
slider.style.background = `url(${images[0].url}) no-repeat top / cover`;

function changeImage() {
    index = (index + 1) % images.length; // Transfer to next image
    slider.innerHTML = images[index].html;
    slider.style.background = `url(${images[index].url}) no-repeat top /
        cover`;
}

setInterval(changeImage, 4000); // Transfer image every 4 seconds
