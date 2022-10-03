//blank variables that'll hold the title of the article and the URL
let articleTitle = " ";
let articleURL = " ";

const newsList = document.querySelector(".news-list");

//api key
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b9d9fa1b41msh1830115e5b81cf6p170c07jsnba165b6b0be1',
		'X-RapidAPI-Host': 'environment-news-live.p.rapidapi.com'
	}
};

//removes duplicate articles
const removeDuplicates = (arr, key) => {
  return [...new Map(arr.map(item => [item[key], item])).values()]
}

const getData = () => {
  fetch('https://environment-news-live.p.rapidapi.com/news/', options).then(response => {
    return response.json();
  }).then( data => {
      console.log(data)
      let uniqueArticles = removeDuplicates(data, "url")
      uniqueArticles.forEach(article => {
        let p = document.createElement("p");
        let li = document.createElement("li");
        let a = document.createElement("a");
        let br = document.createElement("br");
        p.textContent = article.title;
        a.setAttribute("href", article.url);
        a.setAttribute("target", "_blank");
        a.textContent = "Link to article";
        li.appendChild(a);
        newsList.appendChild(p);
        newsList.appendChild(li);
        newsList.appendChild(br);
      })
  }).catch(err => console.error(err));
}

getData();
