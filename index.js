document.addEventListener('DOMContentLoaded', function(){
    const container = document.querySelector('.main-container')
    const blogInput = document.querySelector('#blogs')
    const demoInput = document.querySelector('#video')
    const edInput = document.querySelector('#ed')
    const workInput = document.querySelector('#work')
    const buttons = document.querySelector('#buttons')

const changeFavicon = link => {
    let favicon = document.querySelector('link[rel="icon"]')
    if (favicon !== null) {
      favicon.href = link
    } else {
      favicon = document.createElement("link")
      favicon.rel = "icon"
      favicon.href = link
      document.head.appendChild(favicon)
    }
  }

    changeFavicon("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/anatomical-heart_1fac0.png")

    
})