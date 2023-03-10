const hora = 26

/*
0 - 11  bom dia
12 - 17 boa tarde 
18 - 23 boa noite 
*/



if (hora >= 0 && hora < 12) {
    console.log('bom dia!')
}else if (hora >= 12 &&  hora <= 17) { 
    console.log('boa tarde!')
}else if (hora > 17 && hora < 24) {
    console.log('boa noite!')
}else{
    console.log('hora invalida!')
}