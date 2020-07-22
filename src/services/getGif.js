const apiKEY = 'm0JTEDIpPzZTMKm1pCJ8839ngXzt5sIi'

export default function getGif({keyword = 'trends', limit} = {}){
  console.log(keyword)
  const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key='+apiKEY+'&q='+keyword+'&limit='+limit+'&offset=0&rating=g&lang=en'

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        return{
          image: image.images.downsized_medium.url,
          id: image.id,
          title: image.title
        }
      })
      return gifs
    })
}