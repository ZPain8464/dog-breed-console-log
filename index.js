



function watchForm() {
    console.log('watchForm ran')
    $('form').submit(event =>{
        event.preventDefault();  
        numImages = $('#text-box').val();
        let URL = `https://dog.ceo/api/breeds/image/random/${numImages}`;
    fetch(URL).then(response => response.json())
    .then(responseJson => console.log(responseJson.message))
    });
}

$(function() {
    console.log('App loaded! Waiting for submit');
    watchForm();
})