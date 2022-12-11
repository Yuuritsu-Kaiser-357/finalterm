var hanghoa = []
function enter() {
    var anhsanpham = document.getElementById("anhsanpham1").value
    var tensanpham = document.getElementById("tensanpham1").value
    var loaisanpham = document.getElementById("loaisanpham1").value;
    var giasanpham = document.getElementById("giasanpham1").value;
    var sosanpham = document.getElementById("sosanpham1").value;
    console.log(anhsanpham)
    if (anhsanpham=="" || tensanpham=="" || loaisanpham=="" || giasanpham==""||giasanpham==""){
        return
    }
    var sanpham = {
        anhsp: anhsanpham,
        tensp: tensanpham,
        loaisp: loaisanpham,
        giasp: giasanpham,
        sosp: sosanpham,
    }
    hanghoa.push(sanpham)
    displayProduct(hanghoa)
}

function displayProduct(hanghoa) {
    var str = ""
    for (let index in hanghoa) {
        str += `<div class="col-md-3"><div class="card" style="width:190px">
        <img src="${hanghoa[index].anhsp}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${hanghoa[index].tensp}<hr></h5>
        <p class="card-text">${hanghoa[index].giasp}<br>${hanghoa[index].loaisp}<br>${hanghoa[index].sosp}</p></div></div></div>`}
    var body =`<div class="container"><div class="row" style="margin-right:30px">${str}</div></div>`
    document.getElementById("listhanghoa").innerHTML = body;
}
  