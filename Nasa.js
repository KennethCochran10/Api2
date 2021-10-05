// const searchNasa = async (param1) => {
//     try {
//         const url = 'https://api.nasa.gov/planetary/apod?api_key=4U5ED3UMzFDXg9dvj7MzPGZW5Tt9ISupegDh5Dbi'
//         const res = await fetch(url);
//         const something = await res.json();
//         Dat1(something)
//     } catch (err) {
//         console.log(err)
//     }
// };

// searchNasa();
// function Dat1(something) {
//     let result = document.getElementById('Info').value
//     document.getElementById('Ohmomma').innerText = something[result]
// }


// document.getElementById('Search')
//     .addEventListener('click', searchNasa)

//let searchbutton = document.getElementById('nasasearch')















const nasasearch = async () => {
    try {
        const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=CMVwi9i9QyqtyDBhMP4qbaURqQ5uKILyfe5N9VHt');
        const gimme = await res.json();
        let iotd = document.getElementById('image')
        iotd.src = gimme.hdurl
        console.log(gimme)
    } catch (err) {
        console.log(err)
    }


}

document.querySelector('button').addEventListener('click', nasasearch)

// const display = () => {
//     let iotd = document.getElementById('image')
//     let img = document.createElement('img')
//     iotd.appendChild(img)
//     img.src = gimme.hdurl


// }



























//function display(image_url) {
    //document.getElementById('image').src = image_url
//}



//let result = document.getElementById('data')


//function searchNasa(gimme) {
//let result = document.getElementsByTagName('body')
//}











