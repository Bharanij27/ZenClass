function callAPI(content, url, headrer){
    var request = new XMLHttpRequest();
    
    request.open('GET', url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        console.log(content,data);
    }
    request.send();
}

callAPI('Dog breeds list', 'https://dog.ceo/api/breeds/list/all');

callAPI('Weather Report', 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid='+'31fff57f3d6d360a330556bbdc5ecc18');

callAPI('CORS API', 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com');