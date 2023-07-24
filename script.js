const gridBox = document.querySelector('.gridBox');

makeGrid(5)

function makeGrid(a){
    const gridItem = document.createElement('div');   
    for(i = 1; i <= a; i++){
        gridItem.classList = 'rows';
        gridBox.appendChild(gridItem.cloneNode(true));

        for(j = 1; j <= a; j++){
            
        }
    }
}

// gridBox.appendChild(gridItem);
// gridItem.classList = 'rows'