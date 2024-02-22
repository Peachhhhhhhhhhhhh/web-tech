// "use strict";

// // const emptyspace = document.querySelector('.space')

// // const html  = '<h2>New Message :<h2><p>this is a messge from script<p>';

// // emptyspace.insertAdjacentHTML("beforeend",html);
 
// const countries = document.querySelector('.countries');

// const getCountry = function(country){
//     console.log(country);
//     const req  = new XMLHttpRequest();
//     req.open('GET', `https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
//     req.send();
//     req.addEventListener("load",function(){
//         const [data] = JSON.parse(this.responseText) ;
//         console.log(data);
//         const html =`<article class="country">
//             <img src="${data.flags.png}" alt="" class="country_img" />
//                     <div  class="country__deta">
//                         <h2 class="country__name">Thailand</h2>
//                         <h4 class="country__region">Asia</h4>
//                     </div>
//                     </article>`
//         countries.insertAdjacentHTML("beforeend",html)
//         countries.style.opacity = 1;

//     });
// }
// getCountry("Thailand");
// getCountry("japan")
// getCountry("usa")
"use strict";

const countries = document.querySelector(".countries");

const getCountry = function (country) {
	console.log(country);
	const req = new XMLHttpRequest();
	req.open("GET", `https://restcountries.com/v3.1/name/${country}`);
	req.send();

	req.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data.name.common);
        const lang = Object.entries(data.languages);
        const currencies = Object.entries(data.currencies);
        const populations = Object.entries(data.population)
		console.log(populations);
        
		const html = `
        <article class="country">
            <img src="${data.flags.png}" alt="" class="country_img" />
            <div class="country_data">
                <h3 class="country_name">${data.name.common}</h3>
                <h4 class="country_region">${data.region}</h4>
                <p class="country_row"> <span>🔊 : </span> ${lang[0][1]} </p>
                <p class="country_row"><span>🪙 : </span> ${currencies[0][1].name} (${currencies[0][1].symbol})</p>
                <p class="country_row"> <span>🧔 : </span>
            </div>
        </article>`;
		countries.insertAdjacentHTML("beforeend", html);
		countries.style.opacity = 1;
	});
};
getCountry("Thailand");
getCountry("japan");
getCountry("USA");

const insert = ()

/* <p class="country_row"> <span>🔊: </span> ${(Object.values(data.languages))} </p>
                <p class="country_row"><span>🪙 : </span> ${(Object.keys(data.currencies))} </p> */

// ประชากร = populations
// เพื่อนบ้าน = borders
// capital