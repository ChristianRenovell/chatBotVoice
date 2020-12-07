function getBrowser() {
    var browser;
    var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if (es_chrome) {
        browser = "chrome";
    }
    var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (es_firefox) {
        browser = "firefox";
    }
    var es_ie = navigator.userAgent.indexOf("MSIE") > -1;
    if (es_ie) {
        browser = "Internet Explorer";
    }
    var es_edge = navigator.userAgent.indexOf("edge") > -1;
    if (es_edge) {
        browser = "edge";
    }
    return browser;
}
