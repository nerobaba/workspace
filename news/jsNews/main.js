let url = "https://api.hnpwa.com/v0/news.json"
const news = []

function getnews(url){
    fetch(url)
    .then(res => { return res.json() })
    .then(json => {
        news.push(json)
        render(news)
    })        
}

function render(){
    let arr = news[0];
    let app = document.querySelector('#app');
    console.log(arr)

    for(let i = 0 ; i < arr.length ; i++){
        let addTitle = document.createElement('a');
        addTitle.setAttribute('class','newsTitle')
        addTitle.innerHTML = arr[i].title;
        addTitle.href = arr[i].url;
        addTitle.target = "_blank";
        app.appendChild(addTitle);
    }
}
getnews(url);