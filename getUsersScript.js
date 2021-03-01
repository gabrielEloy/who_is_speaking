if (!document.querySelector(".GvcuGe")) {
  document.querySelector("span.DPvwYc.sm8sCf.azXnTb").click();
}


setTimeout(() => {
    const participantsNodeList = document.querySelector('div.GvcuGe').children;

    const participantsOuterHTML = [];
    
    for(let key in participantsNodeList){
        if(!Number.isNaN(parseInt(key))){
            const name = participantsNodeList[key].innerText.replace('keep_off', '');
            const img = participantsNodeList[key].children[0].children[0].src;
            console.log({name, img})

            participantsOuterHTML.push({
                name,
                img
            })
        }
    };
    
    chrome.storage.sync.set({participants: participantsOuterHTML})
}, 1500);