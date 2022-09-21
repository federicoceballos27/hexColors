function changeColors(){
    var color_combination = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    var hex_code=''

    for(var i=0; i<6;i++){
    var random_combination= Math.floor(Math.random()*color_combination.length)
    hex_code += color_combination[random_combination]
    }
    
    document.getElementById('code').innerHTML= hex_code
    document.getElementsByTagName('body')[0].style.background='#'+hex_code
}