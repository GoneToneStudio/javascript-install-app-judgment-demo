/*
 * Developed by 張文相 Zhang Wenxiang
 * https://www.facebook.com/GoneToneDY
 * https://blog.reh.tw/
 */
function openClient(scheme_url, download_url, timeout = 600) {
    var startTime = Date.now();
    var ifr = document.createElement('iframe');

    ifr.src = scheme_url;
    ifr.style.display = 'none';
    document.body.appendChild(ifr);

    var t = setTimeout(function() {
        var endTime = Date.now();

        if (!startTime || endTime - startTime < timeout + 200) {
            //App is not installed
            if (confirm("Application is not installed, go to the download?")) {
                window.open(download_url, "_blank");
            }
        }
    }, timeout);

    window.onblur = function() {
        clearTimeout(t);
        window.addEventListener("DOMContentLoaded", function() {
            document.body.removeChild(ifr);
        }, false);
    }
}
