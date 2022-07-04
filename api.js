export async function fetchArticles() {
    const response = await fetch(
        `http://myjson.dit.upm.es/api/bins/igqb`
    );
    const data = await response.json();
    return data.message;
}
