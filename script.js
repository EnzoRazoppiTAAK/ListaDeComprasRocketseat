const form = document.querySelector("form");
const formInput = document.querySelector("form input");
const list = document.querySelector("ul");

form.onsubmit = (event) => {
    event.preventDefault();

    try{
        if(formInput.value === ''){
            throw new Error('O campo de adicionar item deve ser preenchido antes do botão ser acionado!')
        }else{
            addNewItem();
        }
    }catch(error){
        alert(error.message)
    }

    clearInput();
}

function addNewItem(){

    const checkbox = createCheckboxPart();

    const itemName = document.createElement('h3');
    itemName.textContent = formInput.value;

    const removeImage = document.createElement('img');
    removeImage.setAttribute('src', 'assets/icons/Frame.svg');
    removeImage.setAttribute('alt', 'Remover o item');


    const newItem = document.createElement('li');
    newItem.append(checkbox, itemName, removeImage);

    list.append(newItem);
}

function createCheckboxPart(){

    const checkboxImage = document.createElement('div');
    checkboxImage.classList.add('checkbox-img');
    const checkboxInput = document.createElement('input');
    checkboxInput.setAttribute('type', 'checkbox');

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    checkbox.append(checkboxImage, checkboxInput);

    return checkbox;
}

function clearInput(){
    formInput.value = '';
    formInput.focus();
}

list.addEventListener('click', function (event){
    console.log(event.target);
    console.log(event.target.tagName);
    if (event.target.tagName === 'IMG'){
        const item = event.target.closest("li");
        item.remove();
    }
})

