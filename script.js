// 1. Inicializar o mapa (Corrigido: adicionado setView)
const map = L.map('map').setView([38.75282, -9.23685], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 2. Os teus locais personalizados
const locais = [
    {
        coords: [38.64058, -9.23098],
        titulo: "Costa da Caparica",
        texto: "Um momento especial à beira-mar."
    },
    {
        coords: [40.52981, -7.85458],
        titulo: "Nelas",
        texto: "As memórias que guardamos daqui."
    },
    {
        coords: [38.75276, -9.23633],
        titulo: "Telhado da Academia Militar - Amadora",
        texto: "Um ponto de vista único sobre o nosso futuro."
    },
    {
        coords: [38.65921, -9.17554],
        titulo: "Fórum Almada",
        texto: "Passeios e conversas infinitas."
    },
    {
        coords: [38.74906, -9.21488],
        titulo: "Koya Sushi",
        texto: "Onde partilhamos o melhor sushi."
    }
];

// 3. Adicionar os marcadores
locais.forEach(l => {
    L.marker(l.coords).addTo(map)
     .bindPopup(`<b>${l.titulo}</b><br>${l.texto}`);
});
