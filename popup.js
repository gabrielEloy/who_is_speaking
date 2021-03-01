let start = document.getElementById('start');


function createParticipantsIcon(participants){
  const container = document.getElementById('participants-container');
  
  participants.forEach(({name, img}) => {
      const div = document.createElement("div");
      div.className = 'participant';

      const userName = document.createElement('p');
      userName.innerText = name

      const picture = document.createElement('img');
      picture.src = img;

      div.append(picture);
      div.append(name);
      container.appendChild(div);
  });
};


chrome.storage.sync.get('color', function(data) {
  start.style.backgroundColor = data.color;
  start.setAttribute('value', data.color);
});

start.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'getUsersScript.js'});
    });

    chrome.storage.sync.get("participants", ({participants}) => {
      createParticipantsIcon(participants)
    })
  };