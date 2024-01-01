const etchBody = document.querySelector('.etch-body');


const tiles = [];

for(let i = 0; i < 16; i ++)
{
  let ecthRowContainer = document.createElement('div');
  ecthRowContainer.classList.add('row')
  for(let j = 0; j < 16; j ++)
  {
    let tile = document.createElement('span');
    tile.classList.add('etch-tile');
    ecthRowContainer.appendChild(tile);
  }
  etchBody.appendChild(ecthRowContainer)
}


