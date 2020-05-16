// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.


const cards = (article) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgCont.classList.add('img-container');


    headline.textContent = article.headline;
    img.src = article.authorPhoto;
    authorName.textContent = `By ${article.authorName}`;


    card.append(headline, author);
    author.append(imgCont, authorName);
    imgCont.append(img);

    return card
}

const container3 = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    for(let key in response.data.articles) {
        for(let i = 0; i < response.data.articles[key].length; i++) {
            container3.appendChild(cards(response.data.articles[key][i]))
        }
    }
  console.log('API RESPONSE HTTP', response);
})
.catch(err => {
    console.log('PROMISE ERROR', err);
})
