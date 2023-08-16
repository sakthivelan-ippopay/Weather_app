let api = 'ec9ca7d2a9f7471a8ac74113233107'
let loc = 'london'



function check(params) {
    fetch(params).then((res)=>{
        return res.json()
     }).then((val)=>{
         return val.current
     }).then((val)=>{
         let temp_c = val.temp_c
         let temp_f = val.temp_f
         let condition = val.condition
         let text = condition.text
         let icon = condition.icon
         let cel = document.getElementById('cel')
         let far = document.getElementById('far')
         let words = document.getElementById('text')
         let img = document.getElementById('icon')
         cel.innerHTML = `Celcius  : ${temp_c} &#176; `
         far.innerHTML = `Farenheit : ${temp_f} &#176;`
         words.innerText = text
         img.setAttribute('src',icon)
     })
}

addEventListener('load',()=>{
    let base_url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${loc}`
    check(base_url)
})

addEventListener('click',(e) => {
    let element = e.target
    let id = element.getAttribute('id')
    if (id === "submit") {
        let location = document.getElementById('location').value
        let load_url = `http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}`
        check(load_url)
    }

})