function login() {
    var token = document.getElementById('token').value;

    if(!token) {
        alert('Token required !!');
        return;
    }

    window.zESettings = {
        webWidget: {
            authenticate: {
                chat: {
                    jwtFn: function(callback) {
                        callback(token);
                    }
                }
            }
        }
    };

    loadChat();
    appendImageAfterClick();
}

function guest() {
    loadChat();
    appendImageAfterClick();
}


function loadChat() {
    var script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=76803a2a-58de-49e7-9223-367135776255';
    script.type = 'text/javascript';
    document.body.parentNode.appendChild(script);
}

function appendImageAfterClick() {
    var $img = document.createElement('img');
    var $footer = document.getElementById('footer');
    //$img.src = 'https://hsto.org/getpro/habr/comment_images/3f1/f54/a1b/3f1f54a1bca0277a20b65310d155fe2d.gif';
    //$footer.appendChild($img);
}

function addTag(){
     var tag = document.getElementById('tag').value;
    
     if(!tag) {
        alert('please enter the tag');
        return;
    }
    window.zE('webWidget', 'chat:addTags',[tag]);
    window.zE('webWidget', 'updatePath', {
        url: window.location.href + '/addedTags',
        title: "Tag added!"
    });

    
}
