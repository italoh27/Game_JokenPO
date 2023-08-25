let paragrafo = document.querySelector('.resultado')
let resultalexa = document.querySelector('.resultalexa')
let pontuaçãohumano = document.querySelector ('.pontuaçãohumano')
let pontuaçãoalexa = document.querySelector ('.pontuaçãoalexa')

let pontohumano = 0
let pontoalexa = 0


const playhumano = (namebutton) => {
  jogueojogo(namebutton, playmachine())

}

const playmachine = () => {

  const name = ['Pedra', 'Papel', 'Tesoura']
  let number = Math.floor(Math.random() * 3)
  return name[number]
}


const jogueojogo = (resulthumano, resultmachine) => {

  if (resulthumano === resultmachine) {
    paragrafo.innerHTML = 'Deu empate!'
  }
  else if ((resulthumano === 'Pedra' && resultmachine === 'Tesoura') ||
    (resulthumano === 'Papel' && resultmachine === 'Pedra') ||
    (resulthumano === 'Tesoura' && resultmachine === 'Papel')
  ) {
    (pontohumano) ++
    pontuaçãohumano.innerHTML = pontohumano 
    paragrafo.innerHTML = 'Você ganhou!'


  } else {
    (pontoalexa) ++
    pontuaçãoalexa.innerHTML = pontoalexa
    paragrafo.innerHTML = 'Você perdeu para a Alexa!'

  }

  if (resultmachine === 'Tesoura') {
    resultalexa.innerHTML = '✌'
  }
  else if (resultmachine === 'Pedra') {
    resultalexa.innerHTML = '👊'
  } else {
    resultalexa.innerHTML = '✋'
  }



}