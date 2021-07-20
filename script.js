const RANDOM_API = 'https://randomuser.me/api/';
const arr = [];
const details = document.querySelector('.card');
let rondomUser = () => {
    fetch(RANDOM_API).then((res) => {
        return res.json();
    }).then((data) => {

        let userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
        let id = data.results[0].id.name;
        let picture = data.results[0].picture.large;
        const obj = {
            userName,
            id,
            picture
        };
        arr.push(obj);

    });
};

let checkSkrol = () => {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const threshold = height - screenHeight / 4;
    const position = scrolled + screenHeight;
    console.log(height)
    if (position >= threshold) {
        console.log('добовляем контент')
      }
    }

let renderUsers = () => {
    for (let i = 0; i <= 12; i++) {
        setTimeout(() =>{
            rondomUser();
        },500);
        
    }
    console.log(arr)
setTimeout(() => {
    arr.forEach(el => {
        console.log(el)
        details.innerHTML += `
                                <div class="details">
                                    <div class="user_photo horizontal_center" id="${el.id}">
                                        <img src="${el.picture}">
                                    </div>
                                    <p id="user_title">Hi, My name is</p>
                                    <p id="user_value" style="text-transform: capitalize;">${el.userName}</p>
                                </div>`; 
    });
    checkSkrol() 
},2000);        
    
}
renderUsers()



    


              

// 