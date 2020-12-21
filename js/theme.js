// referencje z htmla do motywu

const body = document.body;
const theme = localStorage.getItem('theme');

//jezeli w localStorage jest zchacheowany theme, zmien klase body
// if(theme){
//     document.body.classList.add(theme);
// }

console.log(document.body.classList);

//przyciski podmieniaja klase body i zapisuja wybor do local storage
document.getElementById('dark').onclick=()=>{
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};
    
document.getElementById('light').onclick=()=>{
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};