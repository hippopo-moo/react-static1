export async function fetchArticles() {
    const response = await fetch(
        `https://hippopo-web.work/wp-json/wp/v2/posts?per_page=3`
        // `https://myjson.dit.upm.es/api/bins/fee3`
        // `https://dog.ceo/api/breed/shiba/images/random/12`
        );
    const data = await response.json();
    console.log(data);
    return data;
    // return data.message; //帰ってきたJSONはmessageに入ってる
}
