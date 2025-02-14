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

let index = 0; // Vị trí ảnh hiện tại

function changeImage() {
    index = (index + 1) % images.length; // Chuyển sang ảnh tiếp theo
    slider.innerHTML = images[index].html;
    slider.style.background = `url(${images[index].url}) no-repeat top /
        cover`;
}

setInterval(changeImage, 4000); // Chuyển ảnh mỗi 4 giây
