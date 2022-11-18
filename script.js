const btn= document.getElementById('btn');
const image = document.getElementById('image')
const title = document.getElementById('title')
const date = document.getElementById('date')
const details = document.getElementById('details')



function randomDogImage(){
    let request  = new XMLHttpRequest()
    request.onload = function(){
       let parsedData= JSON.parse(request.response)
       console.log(parsedData)
        let imageUrl = parsedData.hdurl
        image.src = imageUrl
        date.innerHTML = parsedData.date
        details.innerHTML = parsedData.explanation
        title.innerHTML = parsedData.title
    }
    request.open("get","https://api.nasa.gov/planetary/apod?api_key=fn7lShUtKv2Dhth2XpzUrc0HpSaqC5bMr6lDjJuh")
    request.send()
}

btn.addEventListener('click',randomDogImage)