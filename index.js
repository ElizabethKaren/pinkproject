const entryDiv = document.querySelector('.entriesDiv')
const writeEntry = document.querySelector('.writeEntry')
const button = document.querySelector('button')
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const fullDate = new Date ()
const date = months[fullDate.getMonth()] + ' ' + fullDate.getDate() + ', ' + fullDate.getHours() + ':' + fullDate.getMinutes()

const getEntries = () =>{
    const diary = JSON.parse(localStorage.getItem('diary'))
    if (diary){
        const entries = new Array(diary)
        console.log(entries)
        entries.map(entry => {
            entryDiv.innerHTML += `<p>${entry.title}</p><span>${entry.body}</span>` 
        })
    }
}

const getInputOrSubmitNewPost = e => {
    if (e.target.innerText === "New Post"){
        provideImputForm()
    } else {
        displayPost()
        writeEntry.remove()
    }
}

const displayPost = () => {
    const body = document.querySelector('#entry')
    const newEntry = document.createElement('div')
    newEntry.innerHTML = `<p>${date}</p><span>${body.value}</span>`
    const newObj = {
        'title': date, 
        'body': body.value
    }
    if (localStorage.getItem('diary')){
        /// something going on here 
        diary = JSON.parse(localStorage.getItem('diary'))
        const entries = new Array(diary)
        const newO = [...entries, newObj]
        localStorage.setItem('diary', JSON.stringify(newO))
    } else {
        localStorage.setItem('diary', JSON.stringify(newObj))
    }
    entryDiv.prepend(newEntry)
    button.innerText = "New Post"
}

const provideImputForm = () => {
    const newForm = document.createElement('form')
    newForm.innerHTML = `<p id='date'>${date}</p><br/><br/><textarea id='entry' placeholder='Dear Diary...' />`
    writeEntry.prepend(newForm)
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