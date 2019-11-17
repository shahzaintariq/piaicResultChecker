var result = document.getElementById('btn');
var rollNum = document.getElementById('search2');

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(xhttp.responseText);
        const data = response.data
        result.addEventListener('click', function zain(){
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
