//blank variables that'll hold the title of the article and the URL
let articleTitle = " ";
let articleURL = " ";

const newsList = document.querySelector(".news-list");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5b1b0b21cemsh840a941f6a256d2p174560jsnd8e9e49d728f",
    "X-RapidAPI-Host": "climate-news-feed.p.rapidapi.com",
  },
};

const getData = () => {
  fetch(
    "https://environment-news-live.p.rapidapi.com/?source=Nasa%20Climate&limit=50&exclude=The%20Guardian",
    options
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      data.articles.forEach((article) => {
        console.log(article.title);
        console.log(article.url);
        let card = document.createElement("div");
        card.classList.add("card");
        let img = document.createElement("img");
        img.classList.add("card-img-top");
        img.src = article.thumbnail;
        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = article.title;
        let link = document.createElement("a");
        link.classList.add("btn", "btn-primary");
        link.setAttribute("href", article.url);
        link.setAttribute("target", "_blank");
        link.textContent = "Read More";
        cardBody.appendChild(title);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);
        newsList.appendChild(card);
      });
    })
    .catch((err) => console.error(err));
};

getData();
