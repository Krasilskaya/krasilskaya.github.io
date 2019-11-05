let blockItem = document.querySelectorAll('.block__item'),
    popup = document.querySelector('.popup'),
    popupContent = popup.querySelector('.popup__content')
    shut = popup.querySelector('.popup-close'),
    card = popup.querySelector('.popup__card');

blockItem.forEach(function(blockItemEl){
    blockItemEl.addEventListener('click', function(){
        popup.style.display = 'flex';
        let cardEl = this.cloneNode(true);
        card.innerHTML = '';
        card.append(cardEl); 
    })
}); 
let popupClose = function(){
    popup.style.display = 'none';  
}
popup.addEventListener('click', function(event){
    if (!popupContent.contains(event.target)){
        popupClose();
    }
});
shut.addEventListener('click', function(){
    popupClose();
});
