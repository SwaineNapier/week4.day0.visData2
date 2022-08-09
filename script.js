let Container=document.getElementById("humanContainer")
fetch("https://randomuser.me/api/?results=80")
.then(function(responce){
    return responce.json()
})
.then(function(data){
    console.log(data)
for(let i=0;i<data.results.length;i++)
{
    let newDiv=document.createElement("div")
    newDiv.className="edit"

    let newImg=document.createElement("img")
    newImg.src=data.results[i].picture.large
    newDiv.append(newImg)

    let newName=document.createElement("h1")
    newName.innerHTML=data.results[i].name.first
    newDiv.append(newName)


    let newName2=document.createElement("h2")
    newName2.innerHTML=data.results[i].name.last
    newDiv.append(newName2)

    let genderRiveal=document.createElement("h2")
    genderRiveal.innerHTML=data.results[i].gender
    newDiv.append(genderRiveal)

    Container.append(newDiv)
}
}
)