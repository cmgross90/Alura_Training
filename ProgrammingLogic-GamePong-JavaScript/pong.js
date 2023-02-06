//minha raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;   

//Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let raio = diametro/2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound('raquetada.mp3');
  ponto = loadSound('ponto.mp3');
  trilha = loadSound('trilha.mp3');
}

let chanceDeErrar = 0;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  fill(255);
  strokeWeight(0);
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaBolinha();
  verificaColisaoBorda();
  movimentaMinhaRaquete();
  verificaColisaoRaquete();
  //colisaoRaqueteBiblioteca(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  colisaoRaqueteBiblioteca(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
  libertaBolinha();

}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento,raqueteAltura);
}



function mostraBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha + raio > height || yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }

}

function movimentaMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }

  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function colisaoRaqueteBiblioteca(x,y){
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);

  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;

  yRaqueteOponente += velocidadeYOponente + chanceDeErrar;

  calculaChanceDeErrar()
}

function incluiPlacar(){
  strokeWeight(2)
  stroke(255,255,255)
  fill(color(255,140,0));
  rect(380,7,40,20);
  fill(color(255,140,0));
  rect(180,7,40,20);
  fill(255);
  textSize(20);
  strokeWeight(0);
  textAlign(CENTER);
  text(meusPontos,200,25);
  text(pontosOponente,400,25);

}

function marcaPontos(){
  if (xBola > 590){   
    foiPonto();
    meusPontos += 1;

  }
  if (xBola < 10){
    foiPonto();
    pontosOpo += 1;
  }
}

function foiPonto(){
  ponto.play();

  // Ao marcar um ponto, lança a bola para o cento do campo
  xBola = 300;
  yBola = 200;
}

function calculaChanceDeErrar() {
  if (pontosOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 60
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function libertaBolinha(){
  if(xBolinha - raio < 0){
    xBolinha = 50;
  }
  if (xBolinha + raio > 600){
    xBolinha =  550;
  }
}
