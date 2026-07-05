//Js code Directly

const buttons = document.querySelectorAll("button")

//Here buttons - Arrays : bcz It is Store Multiple HTML Buttons Tags

const movieContainer = document.getElementById("movie-container")

//How you will Access Each/ Button tag(Data of Array) Store inside Array

buttons.forEach( btn =>{

    btn.addEventListener('click' , ()=>{

         const mood =      btn.dataset.mood

         fetcthMovie(mood)

    });      


});


//Task 2 SeargcThr Movies on The basis of mood

 async  function fetcthMovie(movieName){
        
     movieContainer.innerHTML = "<h2>Loading ....</h2>"

        let url = `http://www.omdbapi.com/?s=${movieName}&apikey=a6606658`

        const response = await fetch(url)
        const data    =  await  response.json()
   
          displayMovie(data.Search)

    }


    //Task 3 : Display Movie On Webpage


    function displayMovie(movies){

         
        movieContainer.innerHTML = "";

        movies.forEach( movie =>{

           const card = document.createElement("div")

           card.classList.add("movie-card")

           card.innerHTML = `
           
           <img src="${movie.Poster}">

           <div class="movie-info">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
           </div>
           
           `

           movieContainer.appendChild(card)


        })



    }
    

