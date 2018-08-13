import React from 'react';
import {Layout, PageContent, CanvasWrapper,SidePanel,ButtonAction, ButtonArea, CodeArea} from './myElements';
import {DataMocksSimple} from './Data';

let timer;
let timer2;
let poswX;
let poswY;

const clear =() =>{
  const canvas = document.getElementById('canvasPlace');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 960, 600);
  clearInterval(timer2);
  clearInterval(timer);
}
const draw_line = () => {
  clear();
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";
  ctx.clearRect(0, 0, 960, 600);
  ctx.beginPath();
  ctx.moveTo(75, 50);
  ctx.lineTo(600, 550);
  ctx.closePath();
  ctx.stroke();
};
const draw_path = () => {
  clear();
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";
  ctx.clearRect(0, 0, 960, 600);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(100, 400);
  ctx.lineTo(300, 100);
  ctx.lineTo(600, 200);
  ctx.lineTo(900, 350);
  ctx.stroke();
};
const draw_rect = () => {
  clear();
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";
  ctx.clearRect(0, 0, 960, 600);
  ctx.fillRect(25, 25, 700, 500);
  ctx.clearRect(70, 90, 96, 60);
  ctx.fillStyle = "#ff0000";
  ctx.fillRect(50, 60, 1000, 300);
};
const draw_arc = () => {
  clear();
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";
  ctx.clearRect(0, 0, 960, 600);
  //ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
  ctx.beginPath();
  ctx.arc(400, 300, 100, 0, 70, 0);

  ctx.stroke();
};
export let axisX = 0;


const dataCalculation = (data) => {
  const count = data.length;
  const space = 820;
  axisX = parseInt(space/count);
}

const chartAxis = () => {
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#000000";
  ctx.strokeStyle = "#000000";
  ctx.clearRect(0, 0, 920, 600);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, 550);
  ctx.lineTo(870, 550);
  ctx.stroke();
};

const simpleChart = () => {
  clear();
  chartAxis ();
  dataCalculation(DataMocksSimple);
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#367dc7";
  DataMocksSimple.map(function(item, i){
    ctx.fillRect(50 + (i*axisX)+10, 550 - (item*7),  axisX-20, item*7);

  })
}
const lineChart = () => {
  clear();
  chartAxis ();
  dataCalculation(DataMocksSimple);
  const canvas = document.getElementById('canvasPlace');
  const  ctx = canvas.getContext('2d');
  ctx.fillStyle = "#073e71";
  ctx.strokeStyle = "#367dc7";
  ctx.beginPath();
  ctx.moveTo(50, 550);
  DataMocksSimple.map(function(item, i){
    ctx.lineTo(50 + ((i*axisX)+(axisX/2)), 550 - (item*7));
    ctx.stroke();
  })
  DataMocksSimple.map(function(item, i){
    ctx.beginPath();
    ctx.arc(50 + ((i*axisX)+(axisX/2)), 550 - (item*7), 10, 0, 360, 0);
    ctx.closePath();
    ctx.fill();
  })
}

const withoutClear = () => {

  const canvas = document.getElementById('canvasPlace');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgba(60,"+poswX +", "+poswX+",0.9)";
  ctx.fillRect(poswX, poswX, 30, 30);
  poswX = poswX + 50;
  poswY = poswY + 50;
  if(poswY > 500){
    clearInterval(timer)
  }
}
const animationWithoutClear = ()=>{
  clear();
  poswX = 50;
  poswY = 50;
  timer = setInterval(withoutClear, 1000);
}
const withClear = () => {
  const canvas = document.getElementById('canvasPlace');
  const ctx = canvas.getContext('2d');
  let color = "rgba(60,"+poswX +", "+poswX+",0.9)"
  ctx.fillStyle = color;
  ctx.clearRect(0, 0, 960, 600);
  ctx.fillRect(poswX, poswX, 30, 30);
  poswX = poswX + 50;
  poswY = poswY + 50;
  if(poswY > 500){
    clearInterval(timer2)
  }
}
const animationClear = ()=>{
  clear();
  poswX = 50;
  poswY = 50;
  timer2 = setInterval(withClear, 1000);
}

 const BasicPage = () => (
  <Layout>
    <PageContent>
      <CanvasWrapper>
        <canvas id="canvasPlace" width="920" height="600">
        Twoja przeglądarka nie obsługuje elementu Canvas.
        </canvas>
      </CanvasWrapper>
      <SidePanel>
        <ButtonArea>
          <ButtonAction onClick={draw_line}>Draw Line</ButtonAction>
          <ButtonAction onClick={draw_path}>Draw Path</ButtonAction>
          <ButtonAction onClick={draw_rect}>Draw Rect</ButtonAction>
          <ButtonAction onClick={draw_arc}>Draw Arc</ButtonAction>
          <ButtonAction onClick={simpleChart}>Solid Chart</ButtonAction>
          <ButtonAction onClick={lineChart}>Line Chart</ButtonAction>
          <ButtonAction onClick={animationWithoutClear}>Without Clear</ButtonAction>
          <ButtonAction onClick={animationClear}>With Clear</ButtonAction>
        </ButtonArea>
      </SidePanel>
    </PageContent>
  </Layout>
);
export default BasicPage;
