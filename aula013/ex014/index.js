var hora = new Date().getHours();
document.querySelector('p#hours_container').innerHTML = `Agora são ${hora} horas.`
if (12 > hora && hora >= 6) {
    //manhã
    document.querySelector('body').style.backgroundColor = 'rgb(255, 196, 0)'
    document.querySelector('#today_image').src = 'https://www.10wallpaper.com/wallpaper/1366x768/1212/Kayaks_morning-Natural_landscape_Photography_Wallpaper_1366x768.jpg'
} else if (18 > hora && hora >= 12){
    //tarde
    document.querySelector('body').style.backgroundColor = 'orangered'
    document.querySelector('#today_image').src = 'https://i.pinimg.com/originals/26/b5/a6/26b5a6044e434c49781b4a8a3cfe85c5.jpg'
} else {
    //noite
    document.querySelector('body').style.backgroundColor = 'rgb(42, 40, 40)'
    document.querySelector('#today_image').src = 'https://i.pinimg.com/originals/bc/88/2c/bc882c4a00eb417c655026731ae35255.jpg'
}