$("#btnSend").click(function () { 
    alert("From: " + $('#tFrom').val() + ", Subject: " + $('#tSub').val() + ", Message: " + $('#tMes').val());

    $('#picAnderson').fadeToggle('slow');
})