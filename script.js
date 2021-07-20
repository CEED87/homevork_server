const RANDOM_API = 'https://randomuser.me/api/';

fetch(RANDOM_API).then((res) => {
    return res.json();
    
}).then((data) => {
    const details = document.querySelector('.card');
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
                        </div>
                            `;
    

    // console.log(data.results[0]);
});

// console.log(details)