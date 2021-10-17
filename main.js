let tagsEl = document.getElementById('tags');
let textArea = document.getElementById('textarea');

textArea.focus()

textArea.addEventListener('keyup',(e) => {
    e.preventDefault()
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(() => {
            e.target.value = ""
        }, 10) 
        // Try removing settimeout
        randomSelect()
    }
})


function createTags(input){
   const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
   
   tagsEl.innerHTML = ''

   tags.forEach(tag => {
       const tagEl = document.createElement('span')
       tagEl.classList.add('tag')
       tagEl.innerText = tag
       tagsEl.appendChild(tagEl)
   })
}

function randomSelect(){
    const times = 30
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)

        setTimeout(() => {
            unhighlighTag(randomTag)
        }, 100);
    },100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, 100);
    }, times*100);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags [Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unhighlighTag(tag) {
    tag.classList.remove('highlight')
}