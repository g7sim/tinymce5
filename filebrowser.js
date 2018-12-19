function wrFilebrowser (callback, value, meta) {
    var cmsURL = "%URL%";
    var type = meta.filetype;

    if (type == "file") {
        type = "downloads"
    };

    if (cmsURL.indexOf("?") < 0) {
        cmsURL = cmsURL + "?type="+ type;
    } else {
        cmsURL = cmsURL + "&type=" + type;
    }

    // FIXME: avoid the following two global variables!
    filebrowsercallback = callback;
    filebrowserwindow = tinymce.activeEditor.windowManager.open({
        title: "File Manager",
        body: {
            type: "panel",
            items: [{
                type: "htmlpanel",
                html: '<iframe src="' + cmsURL + '" style="width:100%; height:100%"></iframe>'
            }]
        },
        buttons: []
    });
    return false;
}
