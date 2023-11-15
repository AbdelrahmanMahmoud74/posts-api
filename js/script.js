function getposts(){
    let request= new XMLHttpRequest();
    request.open("Get","https://jsonplaceholder.typicode.com/posts")
    request.responseType="json"
    request.send()
    request.onload=function(){
        if(request.status>=200 && request.status<300){
            let posts=request.response;
            document.getElementById("posts").innerHTML=''
            for(post of posts){
                let content=`
                <div id="user">
                <h4>${post.id}</h4>
            <h3>${post.title}</h3>
            <h3>${post.body}</h3>
        </div>
                
                `
                document.getElementById("posts").innerHTML+=content;
            }
        }
        else{
            alert("ERROR")
        }
    }
}
