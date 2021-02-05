const entryDiv = document.querySelector('.entriesDiv')
const button = document.querySelector('button')

const getInputOrSubmitNewPost = e => {
    if (e.target.innerText === "New Post"){
        provideImputForm()
    } else {
        displayPost()
    }
}

const displayPost = () => {
    const input = document.querySelector('input')
    const newEntry = document.createElement('div')
    newEntry.innerText = input.value
    entryDiv.append(newEntry)
}

const provideImputForm = () => {
    const newForm = document.createElement('form')
    newForm.innerHTML = `<input id='title placeholder='My Day..' /><br/><input id='entry' placeholder='Dear Diary...' />`
    entryDiv.append(newForm)
    button.innerText = 'Post'
}

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

document.addEventListener('DOMContentLoaded', function(){
    button.addEventListener('click', (e) => getInputOrSubmitNewPost(e))
    changeFavicon("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/anatomical-heart_1fac0.png")
})