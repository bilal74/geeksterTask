
const fetchData = async () => {
    const res = await fetch('https://restcountries.eu/rest/v2/alpha/in');

    const country = await res.json();

    console.log(country);

}

fetchData();