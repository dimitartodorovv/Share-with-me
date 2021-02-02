let buttonComment = document.querySelector('.btn-comments');
let buttonLike = document.querySelector('.btn-like');
let buttonUnlike = document.querySelector('.btn-unlike');
let span = document.querySelector('.textarea-comments');


document.addEventListener('click', increasePictures);
document.addEventListener('click', showMessageWrite);

function increasePictures(e) {

    if(e.target.className === 'img-users'){
        let images = e.target;
  let imgClass =  images.getAttribute('class');
  let modal = document.getElementById('myModal')
  let modalImg = document.getElementById('img01');
  let spanClose = document.getElementsByClassName("close")[0];
        if(imgClass == 'img-users') {
            modal.style.display = 'block';
            modalImg.src = images.src;
        }
        spanClose.addEventListener('click', () => {
            modal.style.display = 'none';
        })
    }
}

function showMessageWrite(e) {
    
if(e.target.dataset.comm == "comment"){

    if(span.style.display != 'block'){
        buttonUnlike.style.visibility = 'hidden'
        buttonLike.style.visibility = 'hidden'
        buttonComment.style.visibility = 'hidden'
        span.style.display = 'block'
    }else{
        span.style.display = 'none'
    }

}
    if(e.target.className == 'textarea-comments'){
              let sendText = e.target;

              sendText.addEventListener('keypress',(e) => {
     
                if(e.key == "Enter"){
                   buttonUnlike.style.visibility = 'visible'
                   buttonLike.style.visibility = 'visible'
                   buttonComment.style.visibility = 'visible'
                    span.style.display = 'none'
       
                }
           })
    }
    

   
}