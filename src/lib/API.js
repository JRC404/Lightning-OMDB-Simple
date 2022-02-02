const fetchMovieData = () => {
    return new Promise((resolve, reject) => {
        fetch(`http://www.omdbapi.com/?t=Avengers&apikey=INSERTKEYHERE`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

// Environment Variables preferred when using API key. API key can be accessed via: http://www.omdbapi.com/apikey.aspx
// Environment Variable documentation located here: https://lightningjs.io/docs/#/lightning-cli-reference/EnvironmentVariables?id=environment-variables

async function getMovieData() {
    const data = await fetchMovieData()
    return data
}

export { getMovieData }