var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")

var bookMarkList = []

if(localStorage.getItem("bookMarkList") != null){
    bookMarkList = JSON.parse(localStorage.getItem("bookMarkList"))
    showData()
}

function addWebsite(){
    var website = {
        websiteName: siteName.value, 
        websiteUrl: siteUrl.value
    }

    bookMarkList.push(website)
    showData()
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList))
}

function showData(){
    var temp = ''
    for(var i=1; i < bookMarkList.length; i++){
        temp += `<tr>
        <td>${i}</td>
        <td>${bookMarkList[i].websiteName}</td>
        <td><button class="btn v-btn px-4"><a class="text-decoration-none text-light" href="${bookMarkList[i].websiteUrl}"><i class="fa-regular fa-eye"></i> Visit</a></button></td>
        <td><button class="btn d-btn" onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
    </tr>`
    }

    document.getElementById("tableData").innerHTML = temp
}

function deleteData(index){
    bookMarkList.splice(index, 1)
    showData()
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList))
}