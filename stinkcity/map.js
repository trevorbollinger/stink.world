function drawMap(offsetX, offsetY) {
  fill("pink");
  stroke(150);

  // Draw a few reference points
  rect(-1000 - offsetX, -1000 - offsetY, 20, 20); // Top-left corner
  rect(1000 - 20 - offsetX, -1000 - offsetY, 20, 20); // Top-right corner
  rect(-1000 - offsetX, 1000 - 20 - offsetY, 20, 20); // Bottom-left corner
  rect(1000 - 20 - offsetX, 1000 - 20 - offsetY, 20, 20); // Bottom-right corner
  rect(-offsetX, -offsetY, 20, 20); // Center
}
