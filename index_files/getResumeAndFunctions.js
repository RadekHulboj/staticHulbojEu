function downloadFile() {
    // debugger;
    var blob = "";
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if (this.status == 200) {
            blob = new Blob([xhr.response], { type: 'application/pdf' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "Cv_RaHu_Protect.docx";
            link.click();
        } else {
            alert("Error. Estatus " + this.status + ".");
        }
    };
    try {
        xhr.open('GET', 'download/file/Cv_RaHu_Protect.docx', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.responseType = 'blob';
        xhr.send('parameter1=&parameter2=');
    } catch (e) {
        alert(e);
    }
}
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}