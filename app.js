var rollNum = prompt('Enter Your Roll Nmber')

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        const data = response.data
        for(i=0; i<data.length; i++){
            if(rollNum === data[i].RollNumber){
                alert(`your Name is ${data[i].Name} and Your Percentile is ${data[i].Percentile}%`);
                break
            }
        }
    }
};
xhttp.open("GET", "piaic.json", true);
xhttp.send();