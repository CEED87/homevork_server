const RANDOM_API = 'https://randomuser.me/api/';
const details = document.querySelector('.card');

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
 function users() {
    for (let i = 0; i < 12; i++) {
         generateInfo();  
}
}
users()

// document.addEventListener('scroll',  () => {
//     if (window.scrollY + window.innerHeight > document.body.offsetHeight 
//         && window.scrollY + window.innerHeight < document.body.offsetHeight + 10) {
//         tttt();
     
//         console.log('window.scrollY')
        
// //    console.log(window.innerHeight)
// //    console.log(document.body.offsetHeight)
   
//     }
    
// })
 
function checkPosition() {
        
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
     
    const scrolled = window.scrollY;
      
    const threshold = height - screenHeight / 2;
      
    const position = scrolled + screenHeight;
     
    if (position >= threshold && position <= threshold + 80) {
       
            users();    

       
       console.log('вызов функции')
    }
    console.log(scrolled)
    console.log(height)
    //  console.log(window.scrollY)
}
window.addEventListener('scroll',checkPosition)
// checkPosition();
      


 
  
