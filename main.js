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
    //container for all boxes in a row
    let ecthRowContainer = document.createElement('div');
    ecthRowContainer.classList.add('row')
    for(let j = 0; j < num; j ++)
    {
      //created tiles as spans so they are inline
      let tile = document.createElement('span');
      //calculates padding based on max width and accounts for border sizing
      let pading = ((800 / num) - 2) / 2
      tile.style.padding = pading.toString()+"px"

      tile.classList.add('etch-tile');
      //appends tiles into row container div
      ecthRowContainer.appendChild(tile);
      tile.addEventListener('mouseover', function()
      {
        tile.style.background = 'black';
      });
    }
    //each row container div is appended to the body so we have n number row divs containing n number of span tiles
    etchBody.appendChild(ecthRowContainer);
  }
}

