document.getElementById('colorInput').addEventListener('input', showSelectedColor);

function fetchColorScheme() {
    const inputColor = document.getElementById('colorInput').value.substring(1);
    const selectedMode = document.getElementById('modeSelect').value;
    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${inputColor}&format=json&mode=${selectedMode}&count=6`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayColors(data.colors))
        .catch(error => {
            console.error('Error fetching the color scheme:', error);
            document.getElementById('palette').innerHTML = '<p>Error al cargar la paleta de colores.</p>';
        });
}

function displayColors(colors) {
    const paletteDiv = document.getElementById('palette');
    paletteDiv.innerHTML = ''; // Limpiar el contenedor de colores anterior

    colors.forEach(color => {
        const colorBox = document.createElement('div');
        const colorInfo = document.createElement('div');

        colorBox.style.backgroundColor = color.hex.value;
        colorBox.className = 'color-box';
        colorBox.style.width = '100px';
        colorBox.style.height = '100px';
        colorBox.style.display = 'inline-block';
        colorBox.style.margin = '5px';
        colorBox.style.border = '1px solid #000';

        colorInfo.className = 'color-info';
        colorInfo.innerHTML = `<strong>${color.name.value}</strong><br>${color.hex.value}`;

        paletteDiv.appendChild(colorBox);
        paletteDiv.appendChild(colorInfo);
    });
}

function showSelectedColor() {
    const inputColor = document.getElementById('colorInput').value;
    document.getElementById('colorDisplay').style.backgroundColor = inputColor;
    document.getElementById('colorInfo').textContent = inputColor.toUpperCase();
}