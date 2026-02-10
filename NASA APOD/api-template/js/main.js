document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const date = document.querySelector('input[type="date"]').value

  if (!date) return

  const url = `https://api.nasa.gov/planetary/apod?api_key=sfhNzA7yZk4lC9uQ8aW4mSFUubRfqAR8SmmYL1Zb&date=${date}`

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const img = document.querySelector('img')
      const iframe = document.querySelector('iframe')
      const description = document.querySelector('.description')

      img.style.display = 'none'
      iframe.style.display = 'none'
      img.src = ''
      iframe.src = ''

      description.textContent = data.explanation

      if (data.media_type === 'image') {
        img.src = data.hdurl || data.url
        img.style.display = 'block'
      } 
      else if (data.media_type === 'video') {
        iframe.src = data.url
        iframe.style.display = 'block'
      }
    })
    .catch(err => {
      console.error('Something went wrong:', err)
    })
}


