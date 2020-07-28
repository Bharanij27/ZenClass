var req = new XMLHttpRequest();

req.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London,uk", true);

req.onreadystatechange = function (oEvent) {  
    if (req.readyState === 4) {  
        if (req.status === 200) {  
          console.log(req.responseText)  
        } else {  
           console.log("Error", req.statusText);  
        }  
    }  
}; 

req.send();  