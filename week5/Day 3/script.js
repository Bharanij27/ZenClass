function createCard(country) {
    //Column
    let column = document.createElement("div");
    column.classList.add("col", "mb-4", "col-lg-4", "col-sm-12", "col-md-4");

    //card
    let card = document.createElement("div");
    card.classList.add("card", "card-style");

    //card-header
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header", "country-name");
    cardHeader.innerHTML = country.name;

    //card-body
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    //card-body-list-capital
    let unorderedList = document.createElement("div");
    unorderedList.classList.add("list-group", "list-group-flush");

    let image = document.createElement("img");
    image.setAttribute("src", country.flag);
    unorderedList.append(image);

    let capital = document.createElement("li");
    capital.classList.add("list-group-item", "list");
    capital.innerText = "Capital: " + country.capital;
    unorderedList.append(capital);

    let region = document.createElement("li");
    region.classList.add("list-group-item", "list");
    region.innerText = "Region: " + country.region;
    unorderedList.append(region);

    let code = document.createElement("li");
    code.classList.add("list-group-item", "list");
    code.innerText = "Country Code: " + country.alpha3Code;
    unorderedList.append(code);

    let latLong = document.createElement("li");
    latLong.classList.add("list-group-item", "list");
    latLong.innerText = "LatLng: " + country.latlng.join(' ');
    unorderedList.append(latLong);

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.innerText = "Click for Weather";
    button.addEventListener(
        "click",
        function () {
            getDataOfCountry(country.name + "," + country.alpha3Code);
        },
        true
    );

    cardBody.append(unorderedList, button);

    card.append(cardHeader, cardBody);
    column.append(card);

    return column;
}

async function getDataOfCountry(name) {
    try {
        let details = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            name +
            "&appid=31fff57f3d6d360a330556bbdc5ecc18"
        );
        let countries = await details.json();

        if (countries.cod == 200) {
            alert(countries.weather[0].description);
        } else {
            alert("No data for this country");
        }
    } catch (error) {
        alert(error);
    }
}

(async function () {
    try {
        let container = document.createElement("div");
        container.classList.add("container", "text-center");

        let row = document.createElement("div");
        row.classList.add("row");

        let getDetails = await fetch("https://restcountries.eu/rest/v2/all");
        let countries = await getDetails.json();

        countries.forEach((country) => {
            let card = createCard(country);
            row.append(card);
        });
        container.append(row);
        document.body.append(container);
    } catch (error) {
        alert(error);
    }
})();