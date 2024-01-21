$(document).ready(function () {
    ["#getStatisticsId", "#getStatisticsIdCombo"].forEach(iterateOver);

    function iterateOver(elementName) {
        $(elementName).click(function (event) {
            event.preventDefault();
            ajaxGet("api/statistics");
        });
    }
});