function squareArea(A){
  var radius = (A * 4) / (Math.PI * 2);
  var area = radius * radius;
  area = area.toFixed(2);
Number(area);
  return area;
}

squareArea(2);