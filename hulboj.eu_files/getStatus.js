$(document).ready(function () {
    ["#getStatusId", "#getStatusIdCombo"].forEach(iterateOver);

    function iterateOver(elementName) {
        $(elementName).click(function (event) {
            event.preventDefault();
            ajaxGet("api/status");
        });
    }
});