import axios from 'axios'
const apiEndPoint = "http://www.omdbapi.com/?apikey=3ba80007&"

export const fetchMovieInfo = async title => {
    try {
        
        const url = apiEndPoint + "t=" + title
        const {data} = await axios.get(url)
    return data
        
    } catch (error) {
        return {status: "error", message: error.message}
    }
}