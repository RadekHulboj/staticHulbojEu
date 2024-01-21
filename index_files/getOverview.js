$(document).ready(function () {
    ["#getOverviewId", "#getOverviewIdCombo"].forEach(iterateOver);

    function iterateOver(elementName) {
        $(elementName).click(function (event) {
            event.preventDefault();
            ajaxGet("api/overview");
        });
    }
});