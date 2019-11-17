const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        var data = response.data
        console.log(data[0]["Roll"])
    }
};
xhttp.open("GET", "piaicaic.json", true);
xhttp.send();
