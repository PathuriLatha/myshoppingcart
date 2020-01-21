
$(document).ready(function(){

   $(".hoverElectronics").hover(function(){
      $(".showElectronics").toggle();
   });
   $(".hoverBooks").hover(function(){
      $(".showBooks").toggle();
   });

   $("#projects").tabs();

     $("ul#main").sortable({
       axis: "x",
       containment: "#projects"
     });

   $.ajax({
    url: "data.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data){
      $(data.Electronics).each(function(index, value){
        if(value.rating >= 4){
//          $("#electronics").append("<li class='displayImages'><img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'></li>");
          $("#electronics").append("<li class='displayImages'>"
            +"<figure class='figure'>"
              +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
              +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
              +"</figcaption>"
            +"</figure>"
            +"</li>");
            /*$("#electronics").append("<div class='container row'>"
            +"<div class='col-sm-2'>"
              +"<figure class='figure'>"
                +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
                +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
                +"</figcaption>"
              +"</figure>"
            +"</div>"
            +"</div>");*/
          // console.log(value.rating);
         // console.log(index);
        }
      });
      console.log($(this));
      $(".displayImages").click(function(){
        //alert("hello");
        $("#electronics").append("<div class='container row'>"
          +"<div class='col-sm-2'>"
            +"<figure class='figure'>"
              +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
              +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
              +"</figcaption>"
            +"</figure>"
          +"</div>"
        +"</div>");
      });
      $(data.Books).each(function(i, v){
        if(v.rating >= 4){
          /*$("#books").append("<div class='container row'>"
           +"<div class='col-sm-2'>"
            +"<figure class='figure'>"
              +"<img class='img-thumbnail' title='"+v.description+"' src='"+v.imgPath+"'>"
              +"<figcaption class='figure-cap'>"
                +v.name+"<br> Price: "+v.price
              +"</figcaption>"
            +"</figure>"
          +"</div>"
          +"</div>");*/
          $("#books").append("<li class='displayImages'>"
            +"<figure class='figure'>"
              +"<img class='img-thumbnail' title='"+v.description+"' src='"+v.imgPath+"'>"
              +"<figcaption class='figure-cap'>"
                +v.name+"<br> Price: "+v.price
              +"</figcaption>"
            +"</figure>"
            +"</li>");
          // console.log(v.rating);
        }
      });
    }
   });
});
