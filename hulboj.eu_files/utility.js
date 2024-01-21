function ajaxGet(restPath) {
    $.ajax({
        type: "GET",
        url: getResult(window.location) + restPath,
        success: function (result) {
            if (result.status === "Done") {
                $('#getResultDiv').empty();
                console.log("Success: ", result);
                $("#getResultDiv").html(result.test);

            } else {
                $("#getResultDiv").html("<strong>Error</strong>");
                console.log("Fail: ", result);
            }
        },
        error: function (e) {
            $("#getResultDiv").html("<strong>Error</strong>");
            console.log("ERROR: ", e);
        }
    });

    function getResult(path) {
        var hrefPath = path.href;
        if(hrefPath.includes('#')) {
            return hrefPath.substr(0, hrefPath.indexOf('#'))
        }
        return path;
    }
}

function searchViaAjax() {
    $("#emailNotification").html('');
    var formData = {
        name :  $('#ContactName').val(),
        email :  $('#ContactEmail').val(),
        subject :  $('#ContactSubject').val(),
        message : $('#ContactMessage').val()
    };
    $.ajax({
        type : "POST",
        url : "/search/api/getSearchResult",
        data : JSON.stringify(formData),
        timeout : 100000,
        dataType : 'json',
        accept : "application/json",
        contentType:"application/json",
        success : function() {
            document.getElementById('ContactName').value = '';
            document.getElementById('ContactEmail').value = '';
            document.getElementById('ContactSubject').value = '';
            document.getElementById('ContactMessage').value = '';
            var notification = "<div class='w3-panel w3-pale-blue w3-border'> <p>The email sent successfully.</p></div>";
            $("#emailNotification").html(notification);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        },
        done : function(e) {
            console.log("DONE");
        }
    });
}