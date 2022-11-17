var images = ["Book.png","Mom.png", "Dad.jpg" , "Little Sis.png", "Little Bro.png", "Little Sis.png"];
var names = ["Family Book","Samantha Robert", "David Robert", "Emily Robert", "Joseph Robert", "Megan Robert"];
var i = 0;
function update()
{ i++;
    var numbers_of_family_member_in_array = 5
      if(i > numbers_of_family_member_in_array)
        {
          i = 0;
        }
    var updatedImage = images[i];
    var updatedName = names[i] ;
 
    document.getElementById("person").src = updatedImage;
    document.getElementById("person_name").innerHTML = updatedName;
}
