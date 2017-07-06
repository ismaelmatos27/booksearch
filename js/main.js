var userSubmit = document.getElementById("userSubmit")

function bookSearch(){
  var userInput = document.getElementById("userInput")
  var displayHere = document.getElementById("displayHere")
  displayHere.innerHTML = ""

  //clear existing reuslts
  userInput.innerHTML = ""

 //API request using jQUERY AJAX
  //SUCCESS means data comes through server
  //GET means we want to retrieve data.
  $.ajax({
    url:"https://www.googleapis.com/books/v1/volumes?q=" + userInput.value,
    dataType:"json",
    //this funbction is called when data is returned
    success: function(data){
      console.log(data)

      for(var i=0; i<data.items.length; i++){
        //making sure my dot notation is on point
        console.log(data.items[i].volumeInfo.title)
        // create all the elements to show the results
        var colsm6=document.createElement("div")
        colsm6.setAttribute("class","col-sm-6 col-md-4")
        displayHere.appendChild(colsm6)

        var thumbnail=document.createElement("div")
        thumbnail.setAttribute("class","thumbnail")
        colsm6.appendChild(thumbnail)

        // create an img with the book icon
        var icon=document.createElement("img")
        icon.src=data.items[i].volumeInfo.imageLinks.thumbnail
        thumbnail.appendChild(icon)

        var caption=document.createElement("div")
        caption.setAttribute("class","caption")
        thumbnail.appendChild(caption)

        //create element for the title
        var h1 = document.createElement("h1")
        //create textNode
        var h1Text = document.createTextNode(data.items[i].volumeInfo.title)
       //Published date
        var h2Published = document.createElement("h2")
        var h2PublishedText = document.createTextNode(data.items[i].volumeInfo.publishedDate)
        //append the text to the h1
        h1.appendChild(h1Text)

       //append more text to h2
        h2Published.appendChild(h2PublishedText)


        //append package to  your divd
        caption.appendChild(h1)
        caption.appendChild(h2Published)

      }
    },
    type:"GET"
  })
}
//event listener to maket his shit work
userSubmit.addEventListener("click",bookSearch,false)
