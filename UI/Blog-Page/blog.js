var firebaseConfig = {
  apiKey: "AIzaSyCy9uDexCPP-q59D-hXWVL5U9ZNrc95or0",
  authDomain: "blogs-a739f.firebaseapp.com",
  databaseURL: "https://blogs-a739f.firebaseio.com",
  projectId: "blogs-a739f",
  storageBucket: "blogs-a739f.appspot.com",
  messagingSenderId: "923325626235",
  appId: "1:923325626235:web:5154555babe765e0acafde",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let blogCollection = document.querySelector("#posts-collection");
const db = firebase.firestore();

function createBlog(title, date, picture, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");
  let p = document.createElement("p");

  let span = document.createElement("span");
  let img = document.createElement("img");

  let h2 = document.createElement("h2");

  h2.textContent = title;
  span.textContent = date;
  img.textContent = picture;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(span);
  div.appendChild(img);
  div.appendChild(p);

  blogCollection.appendChild(div);
}

function getBlogs() {
  db.collection("Blogs")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((docs) => {
        createBlog(
          docs.data().BlogName,
          docs.data().Date,
          docs.data().picture,
          docs.data().BlogContent
        );
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
getBlogs();
