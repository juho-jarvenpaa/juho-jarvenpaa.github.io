binaryFall();
setupVisibleVideos();

function binaryFall()
{
    const scrollContainer = document.getElementById('scroll-container');

    for (let i = 0; i < 80; i++) {

        const elemDiv = document.createElement('div');

        elemDiv.className = "scroll-text-" + (getRandomInt(3) + 1);

        elemDiv.innerHTML = createText();

        const randRight = getRandomInt(100) + 1;
        const randBottom = getRandomInt(100) + 1;

        elemDiv.style.position = 'absolute';
        elemDiv.style.right = randRight + '%';
        elemDiv.style.bottom = randBottom + '%';
        elemDiv.style.opacity = '1.0';
        elemDiv.style.zIndex = '100';

        scrollContainer.appendChild(elemDiv);
    }
}

function setupVisibleVideos()
{
    const videos = document.querySelectorAll('.autoplay-video');

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const video = entry.target;

            if (entry.isIntersecting) {

                video.play().catch(() => {});

            } else {

                video.pause();
            }
        });

    }, {
        threshold: 0.25
    });

    videos.forEach(video => {
        observer.observe(video);
    });
}

function createText()
{
    const contentString = createContent();

    return contentString.split("").join('<br>');
}

function createContent()
{
    let myString = "";

    const length = getRandomInt(10) + 5;

    for (let i = 0; i < length; i++) {

        myString += getRandomInt(2);
    }

    return myString;
}

function getRandomInt(max)
{
    return Math.floor(Math.random() * max);
}