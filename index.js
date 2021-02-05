const entryDiv = document.querySelector('.entriesDiv')
const button = document.querySelector('button')

const getEntries = () =>{
    const diary = JSON.parse(localStorage.getItem('diary'))
    if (diary){
        const entries = new Array(diary)
        console.log(entries)
        entries.map(entry => {
            entryDiv.innerHTML += `<h3>${entry.title}</h3><span>${entry.body}</span>` 
        })
    }
}

const getInputOrSubmitNewPost = e => {
    if (e.target.innerText === "New Post"){
        provideImputForm()
    } else {
        displayPost()
    }
}

const displayPost = () => {
    const title = document.querySelectorAll('input')[0]
    const body = document.querySelectorAll('input')[1]
    const newEntry = document.createElement('div')
    newEntry.innerHTML = `<p>${title.value}</p><span>${body.value}</span>`
    const newObj = {
        title: title.value, 
        body: body.value
    }
    localStorage.setItem('diary', JSON.stringify(newObj))
    entryDiv.append(newEntry)
    button.innerText = "New Post"
    title.remove()
    body.remove()
}

const provideImputForm = () => {
    const newForm = document.createElement('form')
    newForm.innerHTML = `<input id='title' placeholder='March 3rd...' /><br/><br/><input id='entry' placeholder='Dear Diary...' />`
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
    getEntries()
    button.addEventListener('click', (e) => getInputOrSubmitNewPost(e))
    changeFavicon("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/anatomical-heart_1fac0.png")
})