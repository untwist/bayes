// Helper function to update the SVG rectangles
function updatePlot() {
  const pA = parseFloat(document.getElementById('pA').value);
  const pBgivenA = parseFloat(document.getElementById('pBgivenA').value);
  const pBgivenNotA = parseFloat(document.getElementById('pBgivenNotA').value);
  const pNotA = 1 - pA;

  // Update value displays
  document.getElementById('pA-value').textContent = pA.toFixed(2);
  document.getElementById('pBgivenA-value').textContent = pBgivenA.toFixed(2);
  document.getElementById('pBgivenNotA-value').textContent = pBgivenNotA.toFixed(2);

  const width = 400;
  const height = 400;

  const widthA = pA * width;
  const widthNotA = pNotA * width;
  const heightBgivenA = pBgivenA * height;
  const heightNotBgivenA = (1 - pBgivenA) * height;
  const heightBgivenNotA = pBgivenNotA * height;
  const heightNotBgivenNotA = (1 - pBgivenNotA) * height;

  const svg = document.getElementById('plot');
  // Remove existing rectangles and texts
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  // Draw rectangles with specified positions and sizes
  const rectAB = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectAB.setAttribute('x', 0);
  rectAB.setAttribute('y', height - heightBgivenA);
  rectAB.setAttribute('width', widthA);
  rectAB.setAttribute('height', heightBgivenA);
  rectAB.setAttribute('class', 'rect-AB');
  svg.appendChild(rectAB);

  const rectAnotB = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectAnotB.setAttribute('x', 0);
  rectAnotB.setAttribute('y', 0);
  rectAnotB.setAttribute('width', widthA);
  rectAnotB.setAttribute('height', heightNotBgivenA);
  rectAnotB.setAttribute('class', 'rect-AnotB');
  svg.appendChild(rectAnotB);

  const rectNotA_B = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectNotA_B.setAttribute('x', widthA);
  rectNotA_B.setAttribute('y', height - heightBgivenNotA);
  rectNotA_B.setAttribute('width', widthNotA);
  rectNotA_B.setAttribute('height', heightBgivenNotA);
  rectNotA_B.setAttribute('class', 'rect-notA_B');
  svg.appendChild(rectNotA_B);

  const rectNotA_notB = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rectNotA_notB.setAttribute('x', widthA);
  rectNotA_notB.setAttribute('y', 0);
  rectNotA_notB.setAttribute('width', widthNotA);
  rectNotA_notB.setAttribute('height', heightNotBgivenNotA);
  rectNotA_notB.setAttribute('class', 'rect-notA_notB');
  svg.appendChild(rectNotA_notB);

  // Add labels for each region with percentages
  const textSize = 12;
  function addText(x, y, text, color) {
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', x);
    t.setAttribute('y', y);
    t.setAttribute('fill', color);
    t.setAttribute('font-size', textSize);
    t.setAttribute('dominant-baseline', 'middle');
    t.setAttribute('text-anchor', 'middle');
    t.textContent = text;
    svg.appendChild(t);
  }
  // Compute area values
  const areaAB = pA * pBgivenA;
  const areaAnotB = pA * (1 - pBgivenA);
  const areaNotA_B = pNotA * pBgivenNotA;
  const areaNotA_notB = pNotA * (1 - pBgivenNotA);

  // Center positions for each region
  const yAB = height - heightBgivenA + heightBgivenA / 2;
  const yAnotB = heightNotBgivenA / 2;
  const yNotA_B = height - heightBgivenNotA + heightBgivenNotA / 2;
  const yNotA_notB = heightNotBgivenNotA / 2;

  const xA = widthA / 2;
  const xNotA = widthA + widthNotA / 2;

  // Choose text color based on rectangle brightness
  function chooseTextColor(bg) {
    // simple luminance check; parse hex to rgb
    const bigint = parseInt(bg.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance < 140 ? '#ffffff' : '#000000';
  }
  // Colors must match CSS definitions above
  const colors = {
    AB: '#4a90d9',
    AnotB: '#c8e3fa',
    notA_B: '#f79a44',
    notA_notB: '#ffdcb3',
  };

  addText(
    xA,
    yAB,
    `P(E | H) × P(H) = ${areaAB.toFixed(2)}`,
    chooseTextColor(colors.AB)
  );
  addText(
    xA,
    yAnotB,
    `P(¬E | H) × P(H) = ${areaAnotB.toFixed(2)}`,
    chooseTextColor(colors.AnotB)
  );
  addText(
    xNotA,
    yNotA_B,
    `P(E | ¬H) × P(¬H) = ${areaNotA_B.toFixed(2)}`,
    chooseTextColor(colors.notA_B)
  );
  addText(
    xNotA,
    yNotA_notB,
    `P(¬E | ¬H) × P(¬H) = ${areaNotA_notB.toFixed(2)}`,
    chooseTextColor(colors.notA_notB)
  );

  // Compute posterior
  const numerator = pBgivenA * pA;
  const denominator = pBgivenA * pA + pBgivenNotA * pNotA;
  let posterior = 0;
  if (denominator > 0) {
    posterior = numerator / denominator;
  }
  document.getElementById('posterior-value').textContent = posterior.toFixed(2);

  // Provide interpretation text
  const interpretation = document.getElementById('interpretation');
  interpretation.textContent =
    `Given the prior P(H) = ${pA.toFixed(2)}, the chance of seeing the evidence when ` +
    `the hypothesis holds (P(E|H)) = ${pBgivenA.toFixed(2)}, and the chance of seeing the evidence when the hypothesis is false (P(E|¬H)) = ` +
    `${pBgivenNotA.toFixed(2)}, the posterior probability P(H|E) = ${posterior.toFixed(2)}.`;
}

// Attach event listeners to sliders
document.getElementById('pA').addEventListener('input', updatePlot);
document.getElementById('pBgivenA').addEventListener('input', updatePlot);
document.getElementById('pBgivenNotA').addEventListener('input', updatePlot);

// Initial plot
updatePlot();
