window.addEventListener('load', () => {
    async function fetchData(){

        const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies")
        
        if(res.status == 200){
            const data = await res.json();
            getData(data);
        }else{
            console.log(error);
        }
        
    }
    fetchData();
});


function getData(data){

    let planetData = data.bodies.filter(ele => (ele.bodyType === 'Planet')).map((ele) =>{
        {
        return {
            planetName : ele.englishName,
            numberOfMoons : ele.moons,
            numberOfDays :  parseFloat(ele.sideralOrbit).toFixed(2),
            numberOfHours : parseFloat(Math.abs(ele.sideralRotation)).toFixed(2),
            avgTemperature : parseFloat(ele.avgTemp-273.15).toFixed(2),
            gravity : ele.gravity,
            position : ["7","8","5","4","1","6","3","2"],
            imgUrl : [
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/mars.svg",
                "../images/tour/planet/earth.svg",    
                "../images/tour/planet/mars.svg",
            ]
        }    
        }
    });

    console.log(planetData);

    // button = document.getElementsByTagName("button");


    // display = document.getElementById(e.target.id);
    // display.onclick = function () {
    //     printData(planetData, this.value);
    // }

    const buttons = document.getElementsByTagName("button");

    const buttonPressed = e => {
        //display = document.getElementById(e.target.id);
        //display.onclick = function () {
        printData(planetData, e.target.value);
    //}  
    }

    for (let button of buttons) {
        button.addEventListener("click", buttonPressed);
    }    
}
    



function printData(planetData, value){

    //let value = document.getElementById('link1').value;
    

    // let article = document.querySelector('.hero--card');
    // let heading = document.createElement('h2');
    // heading.className = 'hero--heading'
    
    // article.appendChild(heading);
    // heading.textContent = planetData[value].planetName;

    const heading = document.querySelector('.hero--heading');
    const numberOfMoons = document.querySelector('.hero--moon');
    const numberOfHours = document.querySelector('.hero--hours');
    const numberOfDays = document.querySelector('.hero--days');
    const temperature = document.querySelector('.hero--temp');
    const gravity = document.querySelector('.hero--gravity');
    const position = document.querySelector('.hero--position');

    numberOfMoons.textContent = (planetData[value].numberOfMoons == null) ? 0 : planetData[value].numberOfMoons.length;
    heading.textContent = planetData[value].planetName.toUpperCase();
    numberOfHours.textContent = planetData[value].numberOfHours;
    numberOfDays.textContent = planetData[value].numberOfDays;
    position.textContent = planetData[value].position[value];
    temperature.textContent = planetData[value].avgTemperature;
    gravity.textContent = planetData[value].gravity;
    document.getElementById("hero--planetImg").src = planetData[value].imgUrl[value];
}

