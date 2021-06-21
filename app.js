let search = $('#giphy');
let giphs = $('#giphs');


search.on('submit', async function(e){
    e.preventDefault();
    let word = $('#giphySearch').val();
    $('#giphySearch').val("");
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q:word, api_key:"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"} });
    append(res)
});

function append(res){
   let num = Math.floor(Math.random()*res.data.data.length)
   if(num){
   let div = $('<div>')
   let img = $('<img>')
   img.attr('src', res.data.data[num].images.original.url )
   img.css({
       'margin-top': '10px',
       'width': '200px',
       'height': 'auto',
   });
   div.append(img)
   giphs.append(div)
}
}

$('#remove').on('click', function(e){
    giphs.empty()
})