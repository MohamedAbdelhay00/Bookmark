var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

var submitBtn = document.querySelector("#submit");
var updateBtn = document.querySelector("#update");

var btns = document.querySelector(".btns");

var indexOfUpdatedObject = 0;

updateBtn.style.display = "none";

var bookMarkList = [];

if (localStorage.getItem("bookMarkList") != null) {
  bookMarkList = JSON.parse(localStorage.getItem("bookMarkList"));
  showData();
}

function addWebsite() {
  var website = {
    websiteName: siteName.value,
    websiteUrl: siteUrl.value,
  };
  var errorText1 = "";
  var errorText2 = "";

  if (validation() == "true") {
    bookMarkList.push(website);
    showData();
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList));
    siteName.value = "";
    siteUrl.value = "";
  } else if (validation() == "url & name") {
    errorText1 = "Name not valid!";
    errorText2 = "Url not Valid!";

    document.getElementById("nameVal").innerHTML = errorText1;
    document.getElementById("urlVal").innerHTML = errorText2;
  } else if (validation() == "name") {
    errorText1 = "Name not valid!";

    document.getElementById("nameVal").innerHTML = "Name not valid!";
    document.getElementById("urlVal").innerHTML = errorText2;
  } else if (validation() == "url") {
    errorText2 = "Url not Valid!";
    document.getElementById("urlVal").innerHTML = "Url not Valid!";
    document.getElementById("nameVal").innerHTML = errorText1;
  }
}

function showData() {
  var temp = "";
  for (var i = 1; i < bookMarkList.length; i++) {
    temp += `<tr>
        <td>${i}</td>
        <td>${bookMarkList[i].websiteName}</td>
        <td><button class="btn v-btn px-4"><a class="text-decoration-none text-light" href="${bookMarkList[i].websiteUrl}"><i class="fa-regular fa-eye"></i> Visit</a></button></td>
        <td><button class="btn d-btn" onclick="deleteData(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
        <td><button class="btn u-btn" onclick="updateData(${i})"><i class="fa-solid fa-pencil"></i> Update</button></td>
    </tr>`;
  }

  document.getElementById("tableData").innerHTML = temp;
}

function deleteData(index) {
  bookMarkList.splice(index, 1);
  showData();
  localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList));
}

function validation() {
  var nameVal = "";
  var urlVal = "";
  if (
    (siteName.value !== null && siteName.value.length < 3) ||
    (siteUrl.value !== null && siteUrl.value.length < 3)
  ) {
    if (
      siteName.value !== null &&
      siteName.value.length < 3 &&
      siteUrl.value !== null &&
      siteUrl.value.length < 3
    ) {
      return "url & name";
    } else if (siteName.value !== null && siteName.value.length < 3) {
      return "name";
    } else {
      return "url";
    }
  } else {
    return "true";
    // addWebsite();
    // urlVal = "";
    // nameVal = "";
    // form.reset();
  }
}

function updateData(index) {
  siteName.value = bookMarkList[index].websiteName;
  siteUrl.value = bookMarkList[index].websiteUrl;

  submitBtn.style.display = "none";
  updateBtn.style.display = "flex";
  btns.style.display = "flex";
  btns.style.justifyContent = "center";

  indexOfUpdatedObject = index;
}

function updateDateBtn() {
  var errorText1 = "";
  var errorText2 = "";

  if (validation() == "true") {
    bookMarkList[indexOfUpdatedObject].websiteName = siteName.value;
    bookMarkList[indexOfUpdatedObject].websiteUrl = siteUrl.value;

    showData();
    localStorage.setItem("bookMarkList", JSON.stringify(bookMarkList));
    siteName.value = "";
    siteUrl.value = "";
    submitBtn.style.display = "flex";
    updateBtn.style.display = "none";
  } else if (validation() == "url & name") {
    errorText1 = "Name not valid!";
    errorText2 = "Url not Valid!";

    document.getElementById("nameVal").innerHTML = errorText1;
    document.getElementById("urlVal").innerHTML = errorText2;
  } else if (validation() == "name") {
    errorText1 = "Name not valid!";

    document.getElementById("nameVal").innerHTML = "Name not valid!";
    document.getElementById("urlVal").innerHTML = errorText2;
  } else if (validation() == "url") {
    errorText2 = "Url not Valid!";
    document.getElementById("urlVal").innerHTML = "Url not Valid!";
    document.getElementById("nameVal").innerHTML = errorText1;
  }
}

var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
