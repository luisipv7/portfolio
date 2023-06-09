// https://raw.githubusercontent.com/luisipv7/portfolio/main/data/profile.json

async function fetchProfileData() {
    const url =
      "https://raw.githubusercontent.com/luisipv7/portfolio/main/data/profile.json";
    const fetching = await fetch(url)
    return fetching.json()
}