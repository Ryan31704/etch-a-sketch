const etchBody = document.querySelector('.etch-body');
let num = 16
drawGrid();
document.getElementById("submit").onclick = function()
{
  while (etchBody.lastElementChild) {
    etchBody.removeChild(etchBody.lastElementChild);
  }
  num = Number(document.getElementById("input").value)
  if(num > 100)
    num = 100;
  drawGrid();
};

function drawGrid()
{
  for(let i = 0; i < num; i ++)
  {
    let ecthRowContainer = document.createElement('div');
    ecthRowContainer.classList.add('row')
    for(let j = 0; j < num; j ++)
    {
      let tile = document.createElement('span');
      let pading = ((800 / num) - 2) / 2
      tile.style.padding = pading.toString()+"px"
      tile.classList.add('etch-tile');
      ecthRowContainer.appendChild(tile);
      tile.addEventListener('mouseover', function()
      {
        tile.style.background = 'black';
      });
    }
    etchBody.appendChild(ecthRowContainer)
  }
}

