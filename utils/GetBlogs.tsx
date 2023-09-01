export async function GetBlogs() {
  const Link = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alekrumkamp`;
  const mediumFeed = await fetch(Link)
    .then((response) => response.json())
    .then((data) => {
      return data.items;
    })
    .catch((error) => console.log(error));

    return mediumFeed;
}
