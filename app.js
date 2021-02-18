const animals = ['dog1', 'dog2', 'dog3']

function showArr(arr, elem) {
    let out = ''
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==undefined){
        out += `<div><img src='images\\${arr[i]}.jpg'><span>${i}</span></div>`
    }}
    document.querySelector(elem).innerHTML = out
    document.querySelector('.out-1-length').innerHTML = 'Длинна массива' + animals.length;

document.querySelector('.out-1-source').innerHTML = 'const animals=[' + animals + ']'

}
showArr(animals, '.out-1-image')



function addToArray() {

if(!Number.isInteger(+document.querySelector('.array-index').value)){
    alert('Введите целое число ')
    return false
}

    let index = +document.querySelector('.array-index').value
    if(index>20){
        alert('Зачем такой большой индекс??')
        return false
    }
    else if(index<0){
        alert('Идекс не должен быть меньше 0')
        return false
    }
    animals[index] = document.querySelector('.array-element').value
    showArr(animals, '.out-1-image')
}

document.querySelector('.add-to-array').onclick = addToArray