function displayweather()
{
    let city=document.getElementById('place').value;
    var apikey='535b433bb4e48f6347b0bfae40562ecb';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid='+apikey+'&units=metric').
    then(res => res.json()).then(data=>{
        var temp=data['main']['temp']
        document.getElementById('temp').innerHTML=temp;
    })
}