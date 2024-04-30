const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// Function to draw a hexagon with center coordinates (x, y), radius (r), and optional fill color
function drawHexagon(x, y, r, fillColor = '#fff') {
  ctx.beginPath(); // Start a new path
  const angle = Math.PI * 2 / 6; // Calculate angle between each side (360 degrees / 6 sides)
  for (let i = 0; i < 6; i++) {
    const xPos = x + r * Math.cos(angle * i); // Calculate x-coordinate of each vertex
    const yPos = y + r * Math.sin(angle * i); // Calculate y-coordinate of each vertex
    if (i === 0) {
      ctx.moveTo(xPos, yPos); // Move to the first vertex for starting the path
    } else {
      ctx.lineTo(xPos, yPos); // Draw line to each subsequent vertex
    }
  }
  ctx.closePath(); // Close the path to form the hexagon
  if (fillColor) {
    ctx.fillStyle = fillColor; // Set fill color if provided
    ctx.fill(); // Fill the hexagon
  } else {
    ctx.strokeStyle = '#000'; // Set stroke color for outline (default black)
    ctx.stroke(); // Draw the outline of the hexagon
  }
}

// Draw a hexagon with center at (200, 200), radius 50, and blue fill color
drawHexagon(200, 200, 50, '#00f');

// Draw another hexagon with center at (100, 300), radius 30
drawHexagon(100, 300, 30);