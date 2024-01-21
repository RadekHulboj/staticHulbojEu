$(document).ready(function () {
    ["#getProfileId", "#getProfileIdCombo"].forEach(iterateOver);

    function iterateOver(elementName) {
        $(elementName).click(function (event) {
            event.preventDefault();
            ajaxGet("api/blog");
        });
    }
});