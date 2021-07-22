const RANDOM_API = 'https://randomuser.me/api/';
const arr = [];
const details = document.querySelector('.card');


const getUser = async (url) => {
    const res = await fetch(url);
    return res.json();
}

const generateInfo = async () => {
    const data = await getUser(RANDOM_API);
    let userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    let id = data.results[0].id.name;
    let picture = data.results[0].picture.large;
    const obj = {
        userName,
         id,
         picture
     };
    arr.push(obj);
}

let generatePosts = async () => {
    arr.forEach(el => {
        details.innerHTML += `
                                <div class="details">
                                    <div class="user_photo horizontal_center" id="${el.id}">
                                        <img src="${el.picture}">
                                    </div>
                                    <p id="user_title">Hi, My name is</p>
                                    <p id="user_value" style="text-transform: capitalize;">${el.userName}</p>
                                </div>`; 
    });
}

let renderUsers = async () => {
        for (let i = 0; i < 12; i++) {
             await generateInfo();  
        }
        generatePosts();
    };

    renderUsers();

    let ttt = async () => {
        await generateInfo();
        generatePosts();
    }

    document.addEventListener('scroll', checkPosition);
         
    
   function checkPosition() {
        
        const height = document.body.offsetHeight;
        const screenHeight = window.innerHeight;
     
        const scrolled = window.scrollY;
      
        const threshold = height - screenHeight / 8;
      
        const position = scrolled + screenHeight;
      
        if (position >= threshold) {
            ttt();
          console.log('Обращение к серверу')
        }
      }
      
              

