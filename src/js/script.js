/*
navigator.geolocation.getCurrentPosition(function(pos){
    
    if(navigator.geolocation){
        console.log("oi")

        constructorImagens(pos.coords)
    } 
    else{
        console.log("hello")
        console.log(pos)
        constructorImagens(position)
    }
    
})*/

//function gps(){

    let pos = {
        latitude: -22.9519,
        longitude: -43.2105
    }

/*   if ("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            constructorImagens(position.coords)
            console.log("if")
        },function(error){
            //if(error.code == 1){
           //     console.log("acertou")
          //  }
            console.log(error)
        })
    }*/

        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(function(position){
                constructorImagens(position.coords)
                console.log("if")
            },function(error){
                console.log(error)
                constructorImagens(pos)
            })
        }


const img = document.querySelector("img");
const diminui = document.querySelector(".diminui");
const aumenta = document.querySelector(".aumenta");
const descricao = document.querySelector("p")
const a = document.querySelector("a")
let indice = 0;

function constructImageURL (photoObj) {

    return "https://farm" + photoObj.farm +
            ".staticflickr.com/" + photoObj.server +
            "/" + photoObj.id + "_" + photoObj.secret + ".jpg";

}

async function constructorImagens(pos){

    console.log("cheguei")
const response = await fetch(`https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=652478b2f38de1d72e03b56e4db4a163&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=${pos.latitude}&lon=${pos.longitude}&text=cachorros`)
const Element = await response.json()

    let imageUrl = constructImageURL(Element.photos.photo[indice]);
    img.src = imageUrl
    descricao.innerHTML = Element.photos.photo[indice].title;
    a.href = constructImageURL(Element.photos.photo[indice]);
    a.innerHTML = constructImageURL(Element.photos.photo[indice]);

    aumenta.addEventListener("click", function(e){

        if(indice >= (Element.photos.photo.length - 1) ){
            indice = 0;
        }
        else {
            indice++;
        }

        img.innerHTML = "";
        img.src = constructImageURL(Element.photos.photo[indice]);
        descricao.innerHTML = "";
        descricao.innerHTML = Element.photos.photo[indice].title;
        a.innerHTML = "";
        a.href = constructImageURL(Element.photos.photo[indice]);
        a.innerHTML = constructImageURL(Element.photos.photo[indice]);
        
    })

    diminui.addEventListener("click", function(e){

        if(indice <= 0){
            indice = (Element.photos.photo.length - 1);
        }
        else {
            indice--;
        }

        img.innerHTML = "";
        img.src = constructImageURL(Element.photos.photo[indice]);
        descricao.innerHTML = "";
        descricao.innerHTML = Element.photos.photo[indice].title;
        a.innerHTML = "";
        a.href = constructImageURL(Element.photos.photo[indice]);
        a.innerHTML = constructImageURL(Element.photos.photo[indice]);
        

    })
}

