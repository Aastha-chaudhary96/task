// Add Cart
let addcart = document.querySelector('.addCart');
let dish = document.querySelector('.reqdish');

document.querySelector('#addCartItem').addEventListener('click',function(){
    addcart.classList.remove('hidden'); 
    document.querySelector('.functionality').classList.add('blur');
});

document.querySelector('#btn-back').addEventListener('click',function(){
    addcart.classList.add('hidden');
    document.querySelector('.functionality').classList.remove('blur');
});                                                                     

// Request Dish
document.querySelector('#reqDish').addEventListener('click',function(){
    dish.classList.remove('hidden');
    document.querySelector('.functionality').classList.add('blur');
});
document.querySelector('#cancel').addEventListener('click',function(){
    dish.classList.add('hidden');
    document.querySelector('.functionality').classList.remove('blur');
});
document.querySelector('#submit').addEventListener('click',function(){
    dish.classList.add('hidden');
    document.querySelector('.functionality').classList.remove('blur');
});

/* Data */
let kitchen = [
    {
        image:'./Images/unsplash_MqT0asuoIcU.png',
        name: 'Home made pizza',
        price: '120',
        timing: '30-50 min',
        rating: '4.5',
    },
    {
        image:'./Images/unsplash_UxRhrU8fPHQ.png',
        name: 'Home made pizza',
        price: '123',
        timing: '40-60 min',
        rating: '4.2',
    },
    {
        image:'./Images/pizza1.png',
        name: 'Home made pizza',
        price: '190',
        timing: '25-45 min',
        rating: '4.7',
    },
    {
        image:'./Images/unsplash_33GPuoFI7v8.png',
        name: 'Home made pizza',
        price: '230',
        timing: '50-79 min',
        rating: '4.9',
    },
    {
        image:'./Images/unsplash_60nzTP7_hMQ.png',
        name: 'Home made pizza',
        price: '120',
        timing: '60-70 min',
        rating: '4.8',
    },
    {
        image:'./Images/unsplash_CbNAuxSZTFo.png',
        name: 'Home made pizza',
        price: '150',
        timing: '50-70 min',
        rating: '4.7',
    },
    {
        image:'./Images/unsplash_MqT0asuoIcU.png',
        name: 'Home made pizza',
        price: '189',
        timing: '40-60 min',
        rating: '4.2',
    },
    {
        image:'./Images/unsplash_nP11TkjxJ7s.png',
        name: 'Home made pizza',
        price: '121',
        timing: '50-79 min',
        rating: '4.1',
    },
    {
        image:'./Images/unsplash_sejqj6Eaqe8.png',
        name: 'Home made pizza',
        price: '149',
        timing: '30-40 min',
        rating: '4.9',
    },
    {
        image:'./Images/unsplash_UxRhrU8fPHQ.png',
        name: 'Home made pizza',
        price: '169',
        timing: '50-70 min',
        rating: '4.8',
    },
    {
        image:'./Images/unsplash_CbNAuxSZTFo.png',
        name: 'Home made pizza',
        price: '210',
        timing: '50-60 min',
        rating: '4.3',
    },
    {
        image:'./Images/unsplash_Y6OgisiGBjM.png',
        name: 'Home made pizza',
        price: '110',
        timing: '50-79 min',
        rating: '4.5',
    }
];
window.onload = function what(){
    let output = '';
    for(let i = 0 ; i < kitchen.length ; i++){
        output += `<div class='card'> 
                        <img src= ${kitchen[i].image} />
                        <div class = "item-info">
                            <h4>${kitchen[i].name} </h4>
                            <p><span>&#8377;</span> ${kitchen[i].price} </p>
                        </div>
                        <div class="additionalInfo">
                            <p id ="rating"> <span>&#9733;</span>${kitchen[i].rating}</p>
                            <p id ="time">${kitchen[i].timing} </p>
                            <p id = "addToCart"><img src = './icons/plus.svg' style="width: 25px; height:25px"/></p>
                        </div>
                        <br>
                    </div>`;
    }
    document.getElementById('items').innerHTML = output;
    console.log(document.querySelectorAll('.items'));
}


/* Video */
const video = document.querySelector('#video');
const playpause = document.querySelector('.play');
const actionOnvideo = document.querySelector('.video');

playpause.addEventListener('click',function(){
        video.play();
        playpause.classList.add('hidden');
        playpause.classList.remove('play');
});

actionOnvideo.addEventListener('click',function(){
    video.pause();
    playpause.classList.remove('hidden');
    playpause.classList.add('play');
});

