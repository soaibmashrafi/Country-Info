const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries =>{
    const flagContainer = document.getElementById('flag-container');
    for(const flag of countries){
        console.log(flag);
        const flagDiv = document.createElement('div');
        const flagClass = flagDiv.classList.add('flagClass');
        flagDiv.innerHTML = `
            <h2>${flag.name.common} </h2>
            <p>Capital: ${flag.capital ? flag.capital[0] : 'No Capital'} </p>
            <button onClick="flagDetails('${flag.cca2}')">Details</button>
        `;
        flagContainer.appendChild(flagDiv);
    }
}

const flagDetails = (new1) =>{
    const url = `https://restcountries.com/v3.1/alpha/${new1}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
}

const displayDetails = details =>{
    const flagDetails = document.getElementById('flag-detail');
    flagDetails.innerHTML = `
    <h3>${details.name.common} </h3>
    <a href="${details.maps.googleMaps}">Google Map</a>
    <p>Capital: ${details.capital ? details.capital[0] : 'No Capital'} </p>
    <p>Timezone: ${details.timezones ? details.timezones[0] : 'Not Found'} </p>
    <p>Populations:${details.population} </p>
    <p>Region:${details.region} </p>
    <img src="${details.flags.png}">
    `
}

loadCountries();
