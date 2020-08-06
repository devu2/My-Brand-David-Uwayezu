document.querySelector('#submitBlogBtn').addEventListener('click',
function(){
    var blogAuthor = document.querySelector('#author').value;
    let blogTitle = document.querySelector('#blogTitle').value;
    let blogImage = document.querySelector('#image').value;
    let blogContent = document.querySelector('#blogContent').value;
    let blogDate = document.querySelector('#blogDate').value;

    if(
        blogAuthor === '' ||
        blogTitle === '' ||
        blogImage === '' ||
        blogContent === '' ||
        blogDate === '' 
    ){
        window.alert("Your Fields Empty!")
    } else{
        db.collection('Blogs').doc().set({
            BlogName: blogTitle,
            author: blogAuthor,
            Date: blogDate,
            Picture: blogImage,
            blogContent:blogContent
    
        })
    }
});


