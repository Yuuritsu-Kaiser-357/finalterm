var mainpost = []
document.getElementById('send').addEventListener('click', enter)
function enter() {
    var titletyper = document.getElementById("titletyper1").value
    var contenttyper = document.getElementById("contenttyper1").value
    var picturetyper = document.getElementById("picturetyper1").value;
    console.log(titletyper)
    if (titletyper=="" || contenttyper=="" || picturetyper==""){
        return
    }
    var post = {
        title: titletyper,
        content: contenttyper,
        picture: picturetyper,
        }
    mainpost.push(post)
    displayProduct(mainpost)
}

function displayProduct(mainpost) {
    var str = ""
    for (let index in mainpost) {
        str += `<div class="card" style="width:800px">
        <div class="card-body">
        <h5 class="card-title">${mainpost[index].title}<hr></h5>
        <p class="card-text">${mainpost[index].content}</p>
        <div style="height:200px;width:500px"><img src="${mainpost[index].picture}" class="card-img-top" alt="..." style="height:100%"></div>
        </div></div>
        <hr>`}
    var body =`<div class="container"><div class="row">${str}</div></div>`
    document.getElementById("listofposts").innerHTML = body;
}