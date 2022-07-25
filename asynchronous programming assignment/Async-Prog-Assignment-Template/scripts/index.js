var image_array=[];
var slideshow_image=document.querySelector("#image");

var url1="https://images.unsplash.com/photo-1511165403689-1e53da0499fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
image_array.push(url1);

var url2="https://images.unsplash.com/photo-1611419010196-a360856fc42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
image_array.push(url2);

var url3="https://images.unsplash.com/photo-1584448141569-69f342da535c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
image_array.push(url3);



var i=0;
setInterval(function(){
    if(i===image_array.length){
        i=0;
    }
  
     slideshow_image.src=image_array[i];
    i=i+1;
},1000)



var movie_arr=[];

var obj1={
    movie_name:"Karen",
    release_date: "sep 2021" ,
    poster_url: "https://m.media-amazon.com/images/M/MV5BMWM3NzlkYzgtZWZmMS00MDRjLWIxN2UtMzYzMTM1Y2U1Yjk1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating: 2.7

};

var obj2={
    movie_name:"save the cinema",
    release_date: "14 jan,2022", 
    poster_url:"https://m.media-amazon.com/images/M/MV5BNWJmYmY2YTYtZDAxYi00YzhhLWFhZWItOTUxNzM5ZjczMTM3XkEyXkFqcGdeQXVyMTAxMzA4Mzgy._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating:6.8

};

var obj3={
    movie_name:"Playing God",
    release_date:" 6 august,2021",
    poster_url: "https://m.media-amazon.com/images/M/MV5BZmMwNzkyZGUtM2U3Ny00Y2IwLWE0ZjEtZDBhNmUxY2RhNzQ5XkEyXkFqcGdeQXVyMjU0OTkyMzQ@._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating: 5.4

};

var obj4={
    movie_name:"Plane A",
    release_date:"16 may 2021",
    poster_url: "https://m.media-amazon.com/images/M/MV5BNTA2YzE2NzItNDE1ZC00NGE1LTg3NDMtYWE1OWM0MDAxMTc2XkEyXkFqcGdeQXVyMzUwNzM5NTM@._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating: 5.8

};

var obj5={
    movie_name:"poster boys",
    release_date:"14 may 2020",
    poster_url:"https://m.media-amazon.com/images/M/MV5BNzJjNTk4NzAtZDc3Ny00OTI4LWE1NjItZmRkNDIzNzk3MmIzXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_UX100_CR0,0,100,100_AL_.jpg",

    imdb_rating:5.4

};

var obj6={
    movie_name:"the color Room",
    release_date:"14 july 2021",
    poster_url: "https://m.media-amazon.com/images/M/MV5BNDUwNWYyZjktODNkMC00N2FjLWEyNGQtNDY5ZTkxMDZiYzVjXkEyXkFqcGdeQXVyMTA1MjAwODI@._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating:6.9,

};

var obj7={
    movie_name:"Deadly cuts",
    release_date: "14 april 2021",
    poster_url: "https://m.media-amazon.com/images/M/MV5BYzFhNzk5MWEtY2Q5Ni00MzAwLWFlYzEtY2JiM2VjMDdmNzYyXkEyXkFqcGdeQXVyMDg3MTUxMg@@._V1_UX67_CR0,0,67,98_AL_.jpg",
    imdb_rating: 5.8

};

var obj8={
    movie_name:"No Man Of God",
    release_date:"23 march 2018",
    poster_url: "https://m.media-amazon.com/images/M/MV5BZGZlZmViMzAtYjczYS00ZGQ1LTk0ZmItMWFiNzZhNWQ1NGEwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating:6.4

};

var obj9={
    movie_name:"Rare Beast",
    release_date: "13 feb 2017",
    poster_url:"https://m.media-amazon.com/images/M/MV5BNDliMTg0YjUtZjUxYS00ZTg1LWE1MmItMTE2ZTY1YTQxODQzXkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_UX100_CR0,0,100,100_AL_.jpg",
    imdb_rating:5.5

};

movie_arr.push(obj1,obj2,obj3,obj4,obj5,obj7,obj8,obj9);


localStorage.setItem("movie",JSON.stringify(movie_arr));
displaydata(movie_arr);

function displaydata(movie_arr){
    document.querySelector("#movies").innerHTML=null;    // this is used before insure that div should empty before making the appending of sorted page.
    movie_arr.forEach(function(elem){             // array.map of array.forEach works same as for loop but it is better.that means array.map or array.forEach
        var div=document.createElement("div");
        var image=document.createElement("img");
         image.src=elem.poster_url;
        
         var title=document.createElement("h4");
          title.textContent=`Name-${elem.movie_name}`;
        
           var date=document.createElement("h4");
              date.textContent=` Releasing_date- ${elem.release_date}`;
        
           var rating=document.createElement("h4");
           rating.textContent=` IMDb_Rating-${elem.imdb_rating}`;
  
           div.append(image,title,date,rating);
  
           document.querySelector("#movies").append(div);
        
    });
}

  

      function handel_rating(){
          var selected=document.querySelector("#imdbrating").value;
             if(selected=="high"){
                 movie_arr.sort(function(a,b){
                     return Number(b.imdb_rating)-Number(a.imdb_rating);
                 })
             }
             if(selected=="low"){
                 movie_arr.sort(function(a,b){
                     return Number(a.imdb_rating)-Number(b.imdb_rating);
                 })
             }
             if(selected=="reload"){
                 location.reload();     // this is used to get back the page in initial position.
             }
             
            
             displaydata(movie_arr);
      }




   