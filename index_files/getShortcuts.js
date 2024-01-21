$(document).ready(function () {
    ["#getShortcutsId", "#getShortcutsIdCombo"].forEach(iterateOver);

    function iterateOver(elementName) {
        $(elementName).click(function (event) {
            event.preventDefault();
            ajaxGet("api/shortcuts");
        });
    }
});