const url = "https://jsonplaceholder.typicode.com/posts/?userId=1"
const getPost = (url)=> {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
          }
    }
    const post = fetch(url,options)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.log(err,'errrr'))  
    return post;
}


const loader = document.getElementById('spinner')

const generatePost = ()=> {
    const cardContainer = document.querySelector('#hotels')
    loader.style.display= "block";
        getPost(url).then(posts => {
        const allCards = posts.map(post =>{
            cardContainer.innerHTML +=`<div class="col-3 mb-4">
              <div class="card h-100">
              <img src="./picture/freestocks.jpg" class="card-img-top img-card" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${post.title}</h5>
                  <p class="card-text">${post.body}</p>
                </div>
              </div>
            </div>`;
            return cardContainer;
         })
         loader.style.display= "none";
         console.log(cardContainer);
    }).catch(err => console.log(err));

    
}
generatePost()