function generateJWT() {
    var username = document.getElementById('username').value;
    var casinoName = document.getElementById('casinoName').value;
    var sessionToken = document.getElementById('sessionToken').value;

    if (!username || !casinoName || !sessionToken) {
        if (!username) alert('Username required');
        if (!casinoName) alert('Casino Name required');
        if (!sessionToken) alert('Session Token required');
        return;
    }

    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': sessionToken,
        },
        body: JSON.stringify({ username, casinoName }),
    };


    return fetch('https://admin.kievimsdev1.ukraine.ptec/chat-admin/api/jwt', requestOptions)
        .then(this.handleResponse)
        .then(resp => {
            var $token = document.getElementById('token');
            $token.value = resp.data.jwtToken;

            return resp;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        var data = text && JSON.parse(text);
        if (!response.ok) {
            var error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function login() {
    var jwttoken = document.getElementById('token').value;

    if(!jwttoken) {
        alert('Token required !!');
        return;
    }

    loadChat();
    
  zE('messenger', 'loginUser', function (callback) {
    callback(jwttoken);
  });

    
}

function guest() {
    loadChat();
}

function loadChat() {
    var script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=3e9a8402-7452-4da6-bb53-a56c00030d8f';
    script.type = 'text/javascript';
    document.body.parentNode.appendChild(script);
}

function addTag(){
     var tag = document.getElementById('tag').value;

     if(!tag) {
        alert('please enter the tag');
        return;
    }
    window.zE('webWidget', 'chat:addTags',[tag]);

}

function updatePath(){
    var title = document.getElementById('title').value;
    var new_url = 'https://' + title + '.com/tagUpdated'
     window.zE('webWidget', 'updatePath', {
        url: new_url,
        title: title
    });
}

function removeTag(){
     var tag = document.getElementById('tag').value;
    
     if(!tag) {
        alert('please enter the tag');
        return;
    }
    zE('webWidget', 'chat:removeTags', [tag]);   
}
