
var images = [];
// img8="https://images-static.nykaa.com/uploads/3a03faa4-f4ed-4f4e-98ec-0c0881b9402b.jpg?tr=w-1200,cm-pad_resize"
img1 ="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_SherlockAllSeasons_Launch/b7724a8c-2bce-45f9-9ab5-eec3848bee79._UR3000,600_SX1500_FMwebp_.jpeg";
img2= "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_HostelDazeS2Launch/0bdde73a-c35b-4971-9829-e264b61795c3._UR3000,600_SX1500_FMwebp_.jpeg"
img3 = "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_BestsellerRevised_Launch/9ea765eb-7e52-458a-83c3-e10205034ca8._UR3000,600_SX1500_FMwebp_.jpeg";
img4 = "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_YoungSheldonS5Launch/9114b7fe-c2ab-4f0a-b762-fca79464b133._UR3000,600_SX1500_FMwebp_.jpeg"
img5 ="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_Chadar_DB/36c0a7a7-b328-4b68-bc9a-2ccc34cce76c._UR3000,600_SX1500_FMwebp_.jpeg";
img6 ="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_NoTimeToDieAllLanguages_Launch/5abd7b86-e96a-4378-a558-e83b829a48ac._UR3000,600_SX1500_FMwebp_.jpeg"
img7="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheAddamsFamily2_Launch/fc77fa3a-0aa8-4e61-8824-68b7865cfdda._UR3000,600_SX1500_FMwebp_.jpeg"
img8 ="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_ChhoriiLaunch/2ecd7ce7-c47c-41af-bd22-cee9ed952925._UR3000,600_SX1500_FMwebp_.jpeg";
img9="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_IndiasUltimateWarrior_DP/e50694a0-d96e-44a5-905c-d59f112114f1._UR3000,600_SX1500_FMwebp_.jpeg";
img10="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_NormalPeople_LP/509aff60-2feb-45fa-9616-14daf6a2e16e._UR3000,600_SX1500_FMwebp_.jpeg";
img11="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheBoysDiabolicalS1_Launch/abbf4dbe-a670-476f-a3ce-bedd075b5bda._UR3000,600_SX1500_FMwebp_.jpeg";

img12="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_AkkadBakkadLaunch/6f85b5c6-0208-4478-b1c5-68ac55d0df6a._UR3000,600_SX1500_FMwebp_.jpeg";
img13="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_WrathofMan_LP/d2463f00-02ed-4799-9c6a-b86d03918128._UR3000,600_SX1500_FMwebp_.jpeg"
img14="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_MumbaiDiariesLaunch/df2492dd-142c-4233-a638-7f661f0dabf5._UR3000,600_SX1500_FMwebp_.jpeg";
img15="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_JohnWick3_LP/b535f621-1c6a-4729-97e5-9f6f52bb13c0._UR3000,600_SX1500_FMwebp_.jpeg"


images.push(img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15)


let id;

let i =0;



    let arr = document.getElementById("slideshow");
        arr.innerHTML=null;

        let img = document.createElement("img");
        img.setAttribute("class","img")
        
        img.src = images[0];

        arr.append(img)
    
      setInterval(function(){
    
        if(i==images.length){
            i =0;
        }

        let arr = document.getElementById("slideshow");
        arr.innerHTML=null;

        let img = document.createElement("img");
        img.setAttribute("class","img")

        img.src = images[i];
        arr.append(img)

        i++
    },3000)









let cartpage = JSON.parse(localStorage.getItem("cartpage"))||[]


let container = document.getElementById("container");

async function getdata(){
    try{
        let movie = document.getElementById("movie").value

        let res = await fetch(`https://api.themoviedb.org/3/search/movie?&api_key=8b64d9487ebddde37d8a275562a77a38&query=${movie}`)

        let data = await res.json();
        // console.log(data)
       
        let arrData = data.results;
        display(arrData)
        console.log(arrData)
    }
    catch(error){

        console.log(error)
    }
}
    var image_Url='https://image.tmdb.org/t/p/w500'
    let moviedata = JSON.parse(localStorage.getItem("moviedata"))||[]

      function display(arrData){
        container.innerHTML =null;


        arrData.forEach(function(elem){
            
    let div = document.createElement("div");
    div.setAttribute("id","div")

    var img=document.createElement("img");
    img.setAttribute("src", image_Url+elem.poster_path);
    img.setAttribute("id","poster");

    let div1 = document.createElement("div")
    div1.setAttribute("id","div1")
    let Title  =  document.createElement("h3");
    Title.innerText = "Name : "+elem.title;

    let Year  =  document.createElement("h3");
    Year.innerText ="Release Year : " + elem.release_date;

    let rating = document.createElement("p");
    rating.setAttribute("id","rat")

    let x=elem.vote_average;
    rating.innerHTML = ` Rating  :  ${x} &#9733 `;

    // console.log(#9733)
    if (x >= 8.5) {
    rec = document.createElement("div");
    rec.innerText = "Recommended";
    rec.className = "Recommended";
    div1.append(rec);
    }



    
    let viewdata = document.createElement("button")
    viewdata.innerText = "ViewDetails";

    viewdata.addEventListener("click",function(){
        if(!moviedata.includes(elem)){
            moviedata.push(elem)
     
            localStorage.setItem("moviedata",JSON.stringify(moviedata))
          
            window.location.href="moviedata.html"
        }

    })


    
    div1.append(Title,Year,rating,viewdata);
    div.append(img,div1)
    container.append(div)


        
        })
    }


        function showdeaitls(det)
        {


        console.log(det)
        return det;

        }

        async function main()

        {

        try{
            
        let data=await getdata()
        // console.log(data)

        if(data==undefined)
        {
            return false;
        }

        displa(data)


       }
        catch(err)
        {
        console.log(err)
        }
        }





    let timerid;

    function debounce(func, delay)

    {


    console.log(timerid)
    if(timerid)
    {
        clearTimeout(timerid);
    }

    timerid=setTimeout(function()
    {
        func();
    },delay)


}

