chrome.contextMenus.create({
    "id": "ShareX_Upload_Image",
    "title": "Upload image with ShareX",
    "contexts": ["image"]
});

chrome.contextMenus.create({
    "id": "ShareX_Upload_Video",
    "title": "Upload video with ShareX",
    "contexts": ["video"]
});

chrome.contextMenus.create({
    "id": "ShareX_Upload_Audio",
    "title": "Upload audio with ShareX",
    "contexts": ["audio"]
});

chrome.contextMenus.create({
    "id": "ShareX_Upload_Text",
    "title": "Upload text with ShareX",
    "contexts": ["selection"]
});

chrome.contextMenus.create({
    "id": "ShareX_Shorten_URL",
    "title": "Shorten URL with ShareX",
    "contexts": ["link"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    let application = "ShareX";

    switch (info.menuItemId) {
        case "ShareX_Upload_Image":
            chrome.runtime.sendNativeMessage(application, {
                Action: "UploadImage",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Video":
            chrome.runtime.sendNativeMessage(application, {
                Action: "UploadVideo",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Audio":
            chrome.runtime.sendNativeMessage(application, {
                Action: "UploadAudio",
                URL: info.srcUrl
            });
            break;
        case "ShareX_Upload_Text":
            chrome.runtime.sendNativeMessage(application, {
                Action: "UploadText",
                Text: info.selectionText
            });
            break;
        case "ShareX_Shorten_URL":
            chrome.runtime.sendNativeMessage(application, {
                Action: "ShortenURL",
                URL: info.linkUrl
            });
            break;
    }
});