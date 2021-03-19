//MIT License

//Copyright (c) 2019 Coding Train

//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Game of Life
// Video: https://youtu.be/FWSR_7kZuYg

// Modified and adapted by Aldon Chen

function make2DArray(cols, rows) {
  let array = new Array(cols);
  for(let i = 0; i < array.length; i++) {
    array[i] = new Array(rows);
  }
  return array;
}

let grid;
let cols;
let rows;
let resolution = 10;

function setup() {
  let canvas = createCanvas(600,320);
  canvas.parent("canvasContainer");
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
  frameRate(30);
}

function draw() {
  background(124, 125, 115);



  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      if (grid[i][j] == 1) {
        fill(124, 125, 115);
        stroke(0);
        rect(x, y, resolution, resolution);

      }
    }
  }

  let nextGeneration = make2DArray(cols, rows);

// Compute nextGeneration based on grid
for (let indexX = 0; indexX < cols; indexX++) {
  for (let indexY = 0; indexY < rows; indexY++) {
    let state = grid[indexX][indexY];
    // Count live neighbors!
    let sum = 0;
    let neighbors = countNeighbors(grid, indexX, indexY);

    if (state == 0 && neighbors == 3) {
      nextGeneration[indexX][indexY] = 1;
    }
    else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
      nextGeneration[indexX][indexY] = 0;
    }
    else {
      nextGeneration[indexX][indexY] = state;
    }
  }
}

grid = nextGeneration;
}

function countNeighbors(grid, x, y) {
let sum = 0;
for (let i = -1; i < 2; i++) {
  for (let j = -1; j < 2; j++) {
    let col = (x + i + cols) % cols;
    let row = (y + j + rows) % rows;
    sum += grid[col][row];
  }
}
sum -= grid[x][y];
return sum;
}
