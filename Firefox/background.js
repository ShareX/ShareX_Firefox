browser.contextMenus.create({
    "id": "ShareX",
    "title": "Upload with ShareX",
    "contexts": ["selection", "image", "video", "audio"],
    "onclick": function(info, tab) {
        browser.runtime.sendNativeMessage("ShareX", {
            URL: info.srcUrl,
            Text: info.selectionText
        });
    }
});