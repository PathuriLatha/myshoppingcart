
$(document).ready(function(){
    $("#carouselId").hide();
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
    url: "flipkart.json",
    dataType: "json",
    type: "get",
    cache: false,
    success: function(data){
      //alert(Object.keys(data).length);
      // var tBody = document.getElementById("tbodyID");
      $(data).each(function(index, value){
        var display = "<div id='"+value.type+"'></div>";
        $(".displayData").append(display);
        if(value.rating >= 4){
          // $("#electronics").append("<li class='displayImages'><img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'></li>");
          /*var bRow = document.createElement("tr");
          var td = document.createElement("td");
          var td.innerHTML = "<figure class='figure'>"
                                           +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
                                           +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
                                           +"</figcaption>"
                                         +"</figure>";
          */

          if(value.type == 'electronics'){
            $("#electronics").append("<div class='row'>"
              +"<div class='col-sm-2'>"
                +"<figure class='figure'>"
                  +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
                  +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
                  +"</figcaption>"
                +"</figure>"
                +"<div class='imageData'><div class=text-primary>"+value.name+"</div>"
                +"</div>"
              +"</div>"
            +"</div>");
          }
          else if(value.type == 'books'){
            $("#books").append("<div class='row'>"
              +"<div class='col-sm-2'>"
                +"<figure class='figure'>"
                  +"<img class='img-thumbnail' title='"+value.description+"' src='"+value.imgPath+"'>"
                  +"<figcaption class='figure-cap'>"+value.name+" "+value.RAM+"<br> Price: "+value.price
                  +"</figcaption>"
                +"</figure>"
              +"</div>"
            +"</div>");
          }

           /* bRow.appendChild(td);
            tBody.appendChild(bRow);*/
          // console.log(value.rating);
         // console.log(index);
        }
      });
    }
   });
});
