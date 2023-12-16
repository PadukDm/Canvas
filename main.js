let example = document.getElementById('example');

let ctx = example.getContext('2d');

example.width = 640;
example.height = 480;
ctx.strokeStyle = '#B70A02'
ctx.strokeRect(15, 15, 266, 266)
ctx.strokeRect(18, 18, 260, 260)
ctx.fillStyle = '#AF5200'
ctx.beginPath();
ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true)
ctx.fill(); // *14
ctx.moveTo(40, 140);
ctx.lineTo(20, 40);
ctx.lineTo(60, 100);
ctx.lineTo(80, 20);
ctx.lineTo(100, 100);
ctx.lineTo(140, 40);
ctx.lineTo(120, 140);
ctx.stroke(); // *22





// ctx.fillRect(20, 20, 256, 256);
// for(i = 0; 1 < 8; i += 2) {
//     for(j = 0; j = 8; j += 2){
//         ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);

//         ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
//     }
// }
