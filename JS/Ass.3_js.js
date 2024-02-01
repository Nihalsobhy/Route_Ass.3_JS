// 2 input(bName, url),      // 1 button (submit)
// tRow

var bName = document.getElementById('bName')
var url = document.getElementById('url')
var submit = document.getElementById('submit')
var tRow = document.getElementById('tRow')



var linkArr;
if (localStorage.links != null){
    linkArr = JSON.parse(localStorage.links)
}else {
    linkArr = []
}

// create array
submit.onclick = function(){
    var newLink = {
        bName: bName.value,
        url: url.value
    }

    linkArr.push(newLink)
    localStorage.setItem('links',JSON.stringify(linkArr))
    tableDisplay()
    clear()
}

// display in table
function tableDisplay(){
    var box = ''
    for (i=0;i<linkArr.length;i++){
        box += `<tr >
            <td>${i+1}</td>
            <td>${linkArr[i].bName}</td>
            <td>
                <button class="btn visit p-0"><a href="${linkArr[i].url}" target="_blank" class="btn"><i class="fa-solid fa-eye" style="color: #ffffff;"></i><span class="text-white"> Visit</span></a></button>
            </td>
            <td>
                <button onclick="deleteLink(${i})" class="btn delete"><i class="fa-solid fa-trash-can" style="color: #ffffff;"></i><span class="text-white"> Delete</span></button>
            </td>
        </tr>
        `}
    tRow.innerHTML = box
}

// clear data from input
function clear(){
    bName.value = ''
    url.value = ''
}

// delete link from table, array and storage
function deleteLink(i){
    linkArr.splice(i,1)
    localStorage.links = JSON.stringify(linkArr)
    tableDisplay()
}