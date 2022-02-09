
const api_url = 'https://www.breakingbadapi.com/api/';
const apiCh="https://www.breakingbadapi.com/api/characters";
const apiQuote="https://www.breakingbadapi.com/api/quote/random";

// get data from api
async function getData(){
    const response = await fetch(api_url + 'characters');
    const data = await response.json();
    printData(data);

};
// print data 
function printData(data){
    
    const navigator_select = document.querySelector('#select-navigator-select');
    navigator_select.innerHTML= 
        `

        <option> Please Select </option>
        ${data.map(actor => `<option> ${actor.name} </option>`)}
        `;
};
// selecet characters from select list
// async to get data by fetch

async function getCh(e){
    if (e !== 'please select'){
        const response = await fetch(`${apiCh}?name=${e}`);
        const data = await response.json();
        const imdCh = document.querySelector('#img');
        const nameCh = document.querySelector('#name-id');
        const nackNameCh = document.querySelector('#nackName');
        const portrayed = document.querySelector('#portrayed');
        nameCh.innerHTML = data[0].name;

        nackNameCh.innerHTML = 'Nickname : ' + data[0].nickname;
        imdCh.src= data[0].img;
        birthday.innerHTML= data[0].birthday;
        portrayed.innerHTML= data[0].portrayed;
        }
};
getData();


async function get_quotes(name){
    if (name !== 'please select'){
        const response = await fetch(`${apiQuote}?author=${name}`);
        const data = await response.json();
        console.log(name);
        console.log(data);
        const quote = document.querySelector('#quote');
        quote.innerHTML =`<p><span>"</span>${data[0].quote}<span>"</span></p>`;
    }
};

///api/characters?name=Walter+White
///api/quote/random?author=Skyler+White









