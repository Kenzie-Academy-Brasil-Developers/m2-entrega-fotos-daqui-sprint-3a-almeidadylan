navigator.geolocation.getCurrentPosition(function(position){})

const img = document.querySelector("img");
const diminui = document.querySelector(".diminui");
const aumenta = document.querySelector(".aumenta");
let indice = 0;

function constructImageURL (photoObj) {

    return "https://farm" + photoObj.farm +
            ".staticflickr.com/" + photoObj.server +
            "/" + photoObj.id + "_" + photoObj.secret + ".jpg";

}

fetch("https://shrouded-mountain-15003.herokuapp.com/https://flickr.com/services/rest/?api_key=652478b2f38de1d72e03b56e4db4a163&format=json&nojsoncallback=1&method=flickr.photos.search&safe_search=1&per_page=5&lat=-25.4284&lon=-49.2733&text=cachorros")
.then(response => response.json())
.then(Element => {

    let imageUrl = constructImageURL(Element.photos.photo[indice]);
    img.src = imageUrl

    aumenta.addEventListener("click", function(e){

        if(indice >= (Element.photos.photo.length - 1) ){
            indice = 0;
        }
        else {
            indice++;
        }

        img.innerHTML = "";
        img.src = constructImageURL(Element.photos.photo[indice]);
        
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

    })
})

