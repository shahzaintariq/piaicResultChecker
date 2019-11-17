var result = document.getElementById('btn');
var rollNum = document.getElementById('search2');

function bcc(){
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        const data = response.data
        result.addEventListener('click', function finalresult(){
            for(i=0;i<data.length;i++){
            if(rollNum.value === data[i].RollNumber){
                alert(`Name: ${data[i].Name} \nRoll Number:${data[i].RollNumber} \nRank ${data[i].Rank} \nPercentge ${data[i].Percentile}%`)
            }
            }
        });
        
    }
};
xhttp.open("GET", "piaic.json", true);
xhttp.send();
}

console.log(bcc());


function cnc(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        const data = response.data
        result.addEventListener('click', function finalresult(){
            for(i=0;i<data.length;i++){
            if(rollNum.value === data[i]["Roll Number"]){
                alert(`Name: ${data[i].Name} \nRoll Number:${data[i]["Roll Number"]} \nRank ${data[i].Rank} \nPercentge ${data[i]["Overall Percentile"]}%`)
            }
            }
        });
        
    }
};
xhttp.open("GET", "piaiccnc.json", true);
xhttp.send();   
}

console.log(cnc());


function aic(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        const data = response.data
        result.addEventListener('click', function finalresult(){
            for(i=0;i<data.length;i++){
            if(rollNum.value === data[i]["Roll Number"]){
                alert(`Name: ${data[i].Name} \nRoll Number:${data[i]["Roll Number"]} \nRank ${data[i].Rank} \nPercentge ${data[i]["Overall Percentile"]}%`)
            }
            }
        });
        
    }
};
xhttp.open("GET", "piaicaic.json", true);
xhttp.send(); 
}

console.log(aic())