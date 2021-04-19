//grab the news container
let newsaccordian = document.getElementById('newsaccordion')

//create an ajax get request
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://gnews.io/api/v4/top-headlines?token=e7744129b26cb2fed30fa5793e48d869&lang=en', true)
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
    //  console.log(json)
    let articles = json.articles
    console.log(articles)
    let newshtml = ''
    articles.forEach(function (element, index) {
      console.log(element, index)


      let news = `<div class="card">
        <div class="card-header" id="heading${index}">
          <h2 class="mb-0">
            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
              aria-expanded="true" aria-controls="collapse${index}">
              <b>Breking news ${index + 1}: </b>${element['title']}
            </button>
          </h2>
        </div>

        <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}" data-parent="newsaccordion">
          <div class="card-body"> 
           ${element['content']}. <a href = ${element.url} target = '_blank'>Read more here</a>
          </div>
        </div>
       `
      newshtml += news
    });
    newsaccordian.innerHTML = newshtml
  }

  else {
    console.log('some error occured')
  }
}
xhr.send()

