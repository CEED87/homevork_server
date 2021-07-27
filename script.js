const RANDOM_API = 'https://randomuser.me/api/';
const details = document.querySelector('.card');
let statusScroll = false;

const getUser = async (url) => {
    const res = await fetch(url);
    return res.json();
};

const generateInfo = async () => {
    const data = await getUser(RANDOM_API);
    let userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    let id = data.results[0].id.name;
    let picture = data.results[0].picture.large;
    details.innerHTML += `
    <div class="details">
        <div class="user_photo horizontal_center" id="${id}">
            <img src="${picture}">
        </div>
        <p id="user_title">Hi, My name is</p>
        <p id="user_value" style="text-transform: capitalize;">${userName}</p>
    </div>`;
};

async function users() {
    if (!statusScroll) {
        statusScroll = true;
        for (let i = 0; i < 12; i++) {
            await generateInfo();
        }
        console.log('Вызов функции');
        statusScroll = false;
    }
}

function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;

    if (position >= threshold) {
        users();
    }
}

document.addEventListener('scroll', checkPosition);

users();