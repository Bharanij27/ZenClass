function callAPI(content, url, headrer){
    var request = new XMLHttpRequest();
    
    request.open('GET', url, true);
    // if(headrer){
    //     request.setRequestHeader('origin','G:/bharani/ZenClass/week2/Day 1/api')
    // }
    request.onload = function() {
        if (this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.response);
            console.log(content,data);
        }
    }
    request.send();
}

callAPI('Dog breeds list', 'https://dog.ceo/api/breeds/list/all', false);

callAPI('Weather Report', 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&&appid='+'31fff57f3d6d360a330556bbdc5ecc18', false);

callAPI('CORS API', 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com', true);