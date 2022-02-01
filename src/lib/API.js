const fetchMovieData = () => {
    return new Promise((resolve, reject) => {
        fetch("http://www.omdbapi.com/?t=Avengers&apikey=")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

async function getMovieData() {
    const data = await fetchMovieData()
    return data
}

export { getMovieData }