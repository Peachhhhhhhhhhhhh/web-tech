const form = document.getElementById("new-comment");
const claer = document.getElementById("claen")
claer.addEventListener("click",function (){

    localStorage.removeItem("comments");
    displayComments([]);
});
function getcomments(){
    let comments = localStorage.getItem('comments')    
    return comments ?   JSON.parse(comments) :  [];
}

function saveComments(comments){
    localStorage.setItem("comments", JSON.stringify(comments));
}

function displayComments(comment){
    const comments = getcomments();
    const commentsDiv = document.getElementById("comments");
    commentsDiv.innerHTML = "";

    comments.forEach(comment => {
        const p = document.createElement('p');
        p.textContent = comment.Text;
        commentsDiv.appendChild(p);
    });
}

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const text_input = document.getElementById("comment-text").value;
    console.log(text_input);
    let comments = getcomments();
    comments.push({Text:text_input});
    saveComments(comments);
    document.getElementById("comments-text").value = "";
    displayComments();
    // if (!comments){
    //     comments=[]
    // }else{
    //     comments = JSON.parse(comments)
    // }
    // const comment={
    //     id: Date.now(),
    //     text: text_input,
    //     date: new Date().toLocaleString()
    // };
});

displayComments();
