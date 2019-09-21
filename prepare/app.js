// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyAQxpjb7bGb7Omn35shKSOIqcyX-2RvmlE",
  authDomain: "fir-blog-902f2.firebaseapp.com",
  databaseURL: "https://fir-blog-902f2.firebaseio.com",
  projectId: "fir-blog-902f2",
  storageBucket: "",
  messagingSenderId: "1060721683807",
  appId: "1:1060721683807:web:7b03a4270de8004efbdaea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
