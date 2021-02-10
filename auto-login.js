$(document).ready(function () {
    document.body.style.opacity = 0;
    document.body.style.background = "black";

    if (window.location.pathname.includes('index.html')) {
        setTimeout(function () {
            document.getElementsByClassName("navbar-rdp-client")[0].style.opacity = "0";
            document.getElementsByClassName("rdp-client-top-view")[0].style.background = "black";
            document.getElementsByClassName("rdhtml5-workspace-header")[0].style.opacity = "0";
            document.getElementsByClassName("alert-dismissible")[0].style.opacity = "0";
            document.getElementsByClassName("container")[0].style.background = "black";
            document.getElementsByClassName("inner")[0].style.background = "black";
            document.body.style.opacity = 1;
            document.body.style.background = "transparent";
            let wvd_element = document.getElementById('c8db6d0b-8c20-4fbe-969e-08d89ff54996');
            wvd_element.style.position = "absolute";
            wvd_element.style.top = "calc(50vh - 75px)";
            wvd_element.style.left = "calc(50vw - 62.5px)";
            wvd_element.style.zIndex = "9999";
            wvd_element.style.width = "125px";
            wvd_element.style.height = "50px";
            wvd_element.style.padding = "0";
            wvd_element.innerHTML = "<button style='width:125px; height:50px; background:grey; color:white; font-size:18px; font-weight:bold;'>Click to Login</button>";
            wvd_element.setAttribute("onclick", "document.getElementById('c8db6d0b-8c20-4fbe-969e-08d89ff54996').style.opacity = '0'; document.getElementsByClassName('rdhtml5-redirectionPrompt')[0].style.opacity = '0'; document.getElementsByClassName('btn-default')[0].click(); document.getElementsByClassName('main-container')[0].style.background = 'black'; document.getElementById('dialog-container').style.background = 'black'; document.getElementById('canvas-container').style.borderWidth = '0'; [].forEach.call(document.getElementsByClassName('rdp-connection-dialog'), function(v, i) { v.style.opacity = '0'; }); setTimeout(function() { document.getElementById('c8db6d0b-8c20-4fbe-969e-08d89ff54996').style.opacity = '9999'; }, 10000);");
        }, 2000);
    } else {
        if (! /\bresource=https%3A%2F%2Fwww.wvd.microsoft.com\b/.test(location.search)) {
            setTimeout(function () {
                document.getElementById("idBtn_Back").click();
            }, 2000);
        };

        setTimeout(function () {
            document.getElementById("i0116").value = '800008@alseducation.onmicrosoft.com';
            document.getElementById("i0116").blur();
            document.getElementById("idSIButton9").setAttribute("onclick", "setTimeout(function(){ document.getElementById('i0118').value = 'tt060600'; document.getElementById('i0118').blur(); document.getElementById('i0118').focus(); document.getElementById('idSIButton9').click(); }, 3000);");
            setTimeout(function () {
                document.getElementById("idSIButton9").click();
            }, 100);
        }, 3000);
    }
});