
$(document).ready(function(){

   /*$(".hoverElectronics").mouseover(function(){
      $(".showElectronics").toggle();
   });
   $(".hoverBooks").hover(function(){
      $(".showBooks").toggle();
   });*/

   $("#projects").tabs();

     $("ul").sortable({
       axis: "x",
       containment: "#projects"
     });

     $("ol").sortable({
       axis: "y",
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
          $("#electronics").append("<li class='displayImages'><img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'></li>");
          // console.log(value.rating);
         // console.log(index);
        }
      });
      $(data.Books).each(function(i, v){
        if(v.rating >= 4){
          $("#books").append("<li class='displayImages'><img class='img-thumbnail' title='"+v.description+"' src='"+v.imgPath+"'></li>");
          // console.log(v.rating);
        }
      });
    }
   });
});
