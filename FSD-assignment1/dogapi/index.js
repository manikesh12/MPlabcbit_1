let nextslidedelay;
let deletedelay;

async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createbreedlist(data.message)
}

async function createbreedlist(data) {
    document.getElementById("breed").innerHTML =
        `
    <select onchange="breedimg(this.value)">
    <option >select your dog breed</option>
    
    ${Object.keys(data).map(function (breed) {
            return `<option >${breed}</option>`
        }).join('')
        }

    </select>`
}

async function breedimg(breed){
    const resp=await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const imgs=await resp.json();
    slideshow(imgs.message);
}
function slideshow(images){
    clearInterval(nextslidedelay);
    clearTimeout(deletedelay);
    console.log(images)
    
    let count=0;
    if(images.length>1){
        document.getElementById("slideshow").innerHTML=`<div class="slide" style="background-image: url(${images[0]})"></div>`;
        document.getElementById("slideshow").innerHTML=`<div class="slide" style="background-image: url(${images[1]})"></div>`;
        if(images.length==2){
            count=0;
        }
        else{count+=2;}
        nextslidedelay =setInterval(nextslide,3000);
    }
    else{
        document.getElementById("slideshow").innerHTML=`<div class="slide" style="background-image: url(${images[0]})"></div>`;
        document.getElementById("slideshow").innerHTML=`<div ></div>`;
        
    }

    function nextslide(){
        document.getElementById("slideshow").insertAdjacentHTML("beforeend",`<div class="slide" style="background-image: url(${images[count]})"></div>`);
        deletedelay =setTimeout(function(){
            document.querySelector(".slide").remove()
        },1000)
        if(count>=images.length){
            count=0;
        }
        else{count++;}
    }
    
    
}

start()
