let planeImg = document.getElementById("planeImg");
let planeImgSecond = document.getElementById("planeImgSecond");


window.addEventListener('scroll', function(){
    
    let value = this.window.scrollY;
    planeImg.style.marginLeft = value * 2 + 'px';
    //planeImgSecond.style.marginRight = value * 1 + 'px';
    
})



// let planetNames = document.getElementById("planetName");
// // let moon = document.getElementById("moon");

// window.addEventListener('load', () => {


//     async function fetchData(){

//         const res = await fetch("https://api.le-systeme-solaire.net/rest/bodies")
        
//         if(res.status == 200){
//             const data = await res.json();
//             getData(data);
//         }else{
//             console.log(error);
//         }
        
//     }

//     function getData(data){

//         let planetData = data.bodies.filter(ele => (ele.bodyType === 'Planet')).map((ele) =>{
//             {
//             return {
//                 planetName : ele.englishName,
//                 numberOfMoons : ele.moons,
//                 numberOfDays :  parseFloat(ele.sideralOrbit).toFixed(2),
//                 numberOfHours : parseFloat(Math.abs(ele.sideralRotation)).toFixed(2),
//                 avgTemperature : parseFloat(ele.avgTemp-273.15).toFixed(2),
//                 gravity :   ele.gravity,
//                 }    
//             }
//         });
//         console.table(planetData);

//         console.log(JSON.stringify(planetData));
        
        

//         // let str = `<h1>${data.bodies[0].id}</h1>`;

//         // html = $.parseHTML(str)

//         // $('body').append(str)
        
//         // let planetName = new Array();
//         // let numberOfMoons = new Array();
//         // let temperatureInCelcius = new Array();
//         // let oneYearInDays = new Array();
//         // let oneDayInHours = new Array();

//         // const lengthOfArray = data.bodies.length
//         // let count = 0;
//         // let count2 = 0;
//         // let count3 = 0;
//         // let count4 = 0;
//         // let count5 = 0;
//         // for(let i=0; i<lengthOfArray; i++){
//         //     if(data.bodies[i].bodyType === 'Planet'){
//         //         planetName[count++] = data.bodies[i].englishName;    
//         //         numberOfMoons[count2++] = data.bodies[i].moons;
//         //         oneYearInDays[count4++] = parseFloat(data.bodies[i].sideralOrbit).toFixed(2);
//         //         oneDayInHours[count5++] = parseFloat(Math.abs(data.bodies[i].sideralRotation)).toFixed(2);
//         //         temperatureInCelcius[count3++] = parseFloat(data.bodies[i].avgTemp-273.15).toFixed(2);
//         //     }
//         // }    
        
//         // console.log(planetName)
//         // console.log(numberOfMoons)
//         // console.log(oneYearInDays)
//         // console.log(oneDayInHours)
//         // console.log(temperatureInCelcius)
        
//         //planetNames.innerText = `${planetName}`
//         // data.bodies.forEach((ele,index) => {
//         //     if(ele.bodyType === 'Planet'){
//         //         console.log(ele.englishName)
//         //     }
//         // })

        

//         // console.log(typeof(data.bodies[0].moons))
//         // console.log(typeof(data.bodies[0].englishName))

//         // data.bodies.forEach((ele) => {
//         //     //if(ele.moons !== null ){
//         //         if(ele.isPlanet){
//         //             console.log(ele.englishName)
//         //             planetName.textContent = name
//         //             // console.log(ele.englishName ,ele.moons)

//         //         }
//         //     //}

//         // })

//         // data.bodies.forEach((ele) => {
//         //     console.log(ele.aroundPlanet)
//         // })
//         // let count = 0;
//         // data.bodies.forEach((ele) => {
//         //     if(ele.aroundPlanet !== null){
//         //         if(ele.aroundPlanet.planet === 'jupiter'){
//         //             console.log(ele.englishName);
//         //             count++;
//         //         }
//         //     } 
//         // })
//         // console.log(count)

//         // for(let i=0; i<data.bodies.length; i++){
//         //     if(data.bodies[i].aroundPlanet.planet === 'mars'){
//         //         console.log(data.bodies[i].englishName)
//         //     }    
//         // }

//         // for(let i=0; i<data.bodies.length; i++){
//         //     if(data.bodies[i].bodyType === 'Planet'){
//         //         console.log(data.bodies[i].englishName)
//         //     }    
//         // }
//             //console.log(data)

//         // for(const adarsh of data.bodies){
//         //     console.log(adarsh)
//         // }
//         //let name;
//         // data.bodies.forEach((ele) => {
//         //     if(ele.isPlanet){
//         //         console.log(ele.englishName);
//         //         name = ele.englishName
//         //     }
//         //     planetName.innerText = `${name}`;
//         // })
 //   }

 //   fetchData();
    
//     // fetch("https://api.le-systeme-solaire.net/rest/bodies")
//     //     .then(res => res.json())
//     //     .then(data => {
            
//     //         data.bodies.forEach((ele) => {
//     //             if(ele.isPlanet){
//     //                 console.log(ele.englishName)
//     //                 const name = ele.englishName
//     //                 planetName.innerText = `${name}`;
//     //             }
//     //         })
//     //     })    
// });


// /* 
// let data = {

//     planetName :
//     numberOfMoons :
//     numberOfDays :
//     numberOfHours :
//     avgTemperature :
//     gravity :

// }  

// let data = data.bodies.map((ele, index) =>{
//     return {
//         id : id
//         planetName : ele[index].englishName
//         numberOfMoons : ele[index].moons
//         numberOfDays :  parseFloat(ele[index]).sideralOrbit).toFixed(2)
//         numberOfHours : parseFloat(ele[index]).sideralRotation).toFixed(2)
//         avgTemperature :    parseFloat(ele[index].avgTemp-273.15).toFixed(2)
//         gravity :   ele[index].gravity
//     }
// });

// if(data.bodies[i].bodyType === 'Planet'){

//     planetName[count++] = data.bodies[i].englishName;  

//     numberOfMoons[count2++] = data.bodies[i].moons;

//     oneYearInDays[count4++] = parseFloat(data.bodies[i].sideralOrbit).toFixed(2);

//     oneDayInHours[count5++] = parseFloat(Math.abs(data.bodies[i].sideralRotation)).toFixed(2);

//     temperatureInCelcius[count3++] = parseFloat(data.bodies[i].avgTemp-273.15).toFixed(2);*/
             //})