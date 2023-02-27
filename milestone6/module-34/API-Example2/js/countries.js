const loadCountries = ()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData =countries =>{
    const countriesContainer = document.getElementById('all-countries');
    //console.log(countries[0].name.common);
    //for(country of countries){
    //    console.log(country.name.common)
    // const countryname = country.name.common;
    // countriesContainer.innerHTML = countryname;

    //}

    countries.forEach(country =>{
        
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name : ${country.name.common} </h3>
        <p>Capital :${country.capital ? country.capital[0]:'No capital'} </P>
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `

        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetails = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data[0]))

}

const showCountryDetails = country =>{
    const countryDetailContainer = document.getElementById('country-details');
    console.log(country)
    countryDetailContainer.innerHTML = `
    <h3>Name : ${country.name.common}</h3>
    <img src="${country.flags.png}">
    `
}

loadCountries();