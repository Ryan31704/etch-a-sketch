const etchBody = document.querySelector('.etch-body');


const tiles = [];

for(let i = 0; i < 64; i ++)
{
  let ecthRowContainer = document.createElement('div');
  ecthRowContainer.classList.add('row')
  for(let j = 0; j < 64; j ++)
  {
    let tile = document.createElement('span');
    tile.classList.add('etch-tile');
    ecthRowContainer.appendChild(tile);
    tile.addEventListener('mouseover', function()
    {
      tile.style.background = 'black';
    });
  }
  etchBody.appendChild(ecthRowContainer)
}





