// Define o centro do mapa (podes pôr a tua cidade)
const map = L.map('map').set8.7223, -9.1393], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

// Lista de locais - ADICIONA OS TEUS AQUI
const locais = [
    {
        coords: [38.7075, -9.1355],
        titulo: "Onde nos conhecemos",
        texto: "Foi aqui que o meu mundo mudou."
    },
    {
        coords: [38.6926, -9.2060],
        titulo: "Primeiro Beijo",
        texto: "Um momento que nunca vou esquecer."
    }
];

locais.forEach(l => {
    L.marker(l.coords).addTo(map)
     .bindPopup(`<b>${l.titulo}</b><br>${l.texto}`);
});
