let nomeHeroi = "Super-Homem"
let xpHeroi = 0

//Lista de níveis
const niveis = [
    {minXP: 0, maxXP: 1000, nome: "Ferro"},
    {minXP: 1001, maxXP: 2000, nome: "Bronze"},
    {minXP: 2001, maxXP: 5000, nome: "Prata"},
    {minXP: 5001, maxXP: 7000, nome: "Ouro"},
    {minXP: 7001, maxXP: 8000, nome: "Platina"},
    {minXP: 8001, maxXP: 9000, nome: "Ascendente"},
    {minXP: 9001, maxXP: 1000, nome: "Imortal"},
    {minXP: 10001, maxXP: Infinity, nome: "Radiante"}
];

let nivel = "Sem Nível";

// Loop que verifica o nível baseado na experiencia preenchida
for (let contador = 0; contador < niveis.length; contador++){
    if(xpHeroi >= niveis[contador].minXP && xpHeroi <= niveis[contador].maxXP){
        nivel = niveis[contador].nome;
        break;
    }
}

console.log("O Herói de nome "+nomeHeroi+" está no nível de "+nivel+" tendo "+xpHeroi+" de XP.")
