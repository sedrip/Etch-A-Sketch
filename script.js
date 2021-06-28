

// Etch-a-Sketch
const screen = document.querySelector('.screen');
const screenSize = 584;
let userInput = prompt ('enter your grid size',);
let gridDimension = (screenSize/userInput) -2;
let div = ""

const gridX = (userInput) => {

    function setGrid() {

        screen.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    }
    
    // screen.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;
    loadGrid()
    function loadGrid () {


        for ( i = 0; i < userInput **2; i++) {
            setGrid()
            div = document.createElement('div');
            div.classList.add('box1');
            screen.append(div);
            div.style.width = `${gridDimension}px`;
            div.style.height = `${gridDimension}px`;
        }
        
        function Click(e) {
            e.target.style.backgroundColor = '#023047';
            
        }
        //   Hold mouse down
        function ClickHover(e) {
            if (e.buttons > 0) {
                e.target.style.backgroundColor = '#023047';
                
        }
        
    }
    function listen() {
        grids = document.querySelectorAll('.box1');
        for (let i = 0; i < grids.length; i++) {
          grids[i].addEventListener('mousedown', Click);
          // listen for mouse over if mouse button press
          grids[i].addEventListener('mouseenter', ClickHover);
        }
        
    }
    
    listen();
}

}

    function randomColor(){
const colors = [
        '#4cc9f0',
        '#4895ef',
        '#4361ee',
        '#3f37c9',
        '#3a0ca3',
        '#480ca8',
        '#560bad',
        '#7209b7',
        '#b5179e',
        '#f72585'

        ]
let randomColor = Math.floor(Math.random() * colors.length)
let colorPicker = colors[randomColor]
        return colorPicker;
    }
    
const colorBtn = document.querySelector('#colorBtn')
    
    colorBtn.addEventListener('click', () => {
        
        for ( i = 0; i < userInput **2; i++) {
            
            colorDiv = document.createElement('div');
            colorDiv.classList.add('box1');
            //mouse click
            function Click(e) {
                e.target.style.backgroundColor = randomColor();
            }
            // mouse hold down
            function ClickHover(e) {
                if (e.buttons > 0) {
                    e.target.style.backgroundColor = randomColor();
                }   
            }
            function listen() {
                grids = document.querySelectorAll('.box1');
                for (let i = 0; i < grids.length; i++) {
                    grids[i].addEventListener('mousedown', Click);
                    // listen for mouse over change color if mouse button press
                    grids[i].addEventListener('mouseenter', ClickHover);
                }   
            }
        }
        listen();
    });
const resetBtn = () => {
        
const resetBtn = document.querySelector('#reset');
        resetBtn.addEventListener('click', function(){
            location.reload();
        })
    }
    resetBtn()
    gridX(userInput);
    
    
    