document.querySelector("#submitBtn").addEventListener("click", createPost);

// Create Posts
function createPost() {
  let postAuthor = document.querySelector("#author").value;
  let postTitle = document.querySelector("#postTitle").value;
  let postContent = document.querySelector("#postContent").value;
  let postDate = document.querySelector("#postDate").value;
  db.collection("posts")
    .doc()
    .set({
      author: postAuthor,
      createdAt: postDate,
      postName: postTitle,
      postContent: postContent
    });
}
