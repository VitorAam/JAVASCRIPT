function verificar() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector('#birth_year')
    var result = document.querySelector('div#detected')
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var gender = document.getElementsByName('gender')
        var age = year - Number(fyear.value)
        var choosed_gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (gender[0].checked) {
            choosed_gender = 'Homem'
            if (age >=0 && age < 10) {
                //child
                img.setAttribute('src', 'https://images.pexels.com/photos/1416736/pexels-photo-1416736.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            } else if (age < 21) {
                //adolescent
                img.setAttribute('src', 'https://images.pexels.com/photos/8571941/pexels-photo-8571941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            } else if (age < 50) {
                //adult
                img.setAttribute('src', 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            } else {
                //elderly
                img.setAttribute('src', 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            }
        } else if (gender[1].checked) {
            choosed_gender = 'Mulher'
            if (age >=0 && age < 10) {
                //child
                img.setAttribute('src', 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&h=750&w=1260')
            } else if (age < 21) {
                //adolescent
                img.setAttribute('src', 'https://images.pexels.com/photos/11621973/pexels-photo-11621973.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            } else if (age < 50) {
                //adult
                img.setAttribute('src', 'https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260')
            } else {
                //elderly
                img.setAttribute('src', 'https://images.pexels.com/photos/2050994/pexels-photo-2050994.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
            }
        }
        result.innerHTML = `Detectamos ${choosed_gender} com ${age} anos.`
        result.appendChild(img)
    }
}