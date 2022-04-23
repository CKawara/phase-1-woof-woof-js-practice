document.addEventListener('DOMContentLoaded', ()=>{
    const dogBar = document.getElementById('dog-bar')
    const filterBtn = document.getElementById('good-dog-filter')
    const summary = document.getElementById('dog-summary-container')
    const digInfo = document.getElementById('dog-info')

    fetch('http://localhost:3000/pups')
    .then(resp=> resp.json())
    .then(data => {
        data.forEach((dog)=>{
            let span = document.createElement('span')
            span.innerText = dog.name
            dogBar.appendChild(span)
        })
    })
})