//Criando um Array/Vetor com valores

//Usando Colchetes
let modelos = ['Gol', 'Corsa', 'Fusca', 12, true, false, null]
//ou
//Usando o construtor da Classe Array
let marcas = Array ('Chevrolet', 'Ford', 'Fiat')


//Criar um Array/Vetor sem valores (ou vazia)
let cores = [];
//ou
let categoria = new Array();

// exibir o conteúdo
console.log(modelos)
console.log(marcas)
console.log(cores)
console.log(categoria)

// Ele permiti limitar ao utilizar essa sintaxe
let clientes = new Array(5)

console.log(clientes)

//adicionando um elemento após a criação de um vetor/array ilimitada

//adicionando no fim do vetor
marcas.push('Jeep')

//adicionando no inicio do vetor
marcas.unshift('VW')
console.log(marcas)

//removendo o ultimo elemento 
marcas.pop()
console.log(marcas)

//removendo o primeiro elemento 
marcas.shift()
console.log(marcas)

// selecionado e copiando uma parte do vetor
let frutas = ['Laranja','Melância', 'Kiwi', 'Uva', 'Manga']
let legumes = ['Batata', 'Cenoura', 'Milho']

let feira = frutas.concat(legumes)

console.log(feira)

// cCopiando uma parte do vetor
let frutas_sel = frutas.slice(1,4)

console.log(frutas_sel)

let frutas_c = frutas.slice(1,1,"Manga")
console.log(frutas_c)

//locaLizar elementos
let situacao = frutas.includes("Manga")
console.log(situacao)

situacao = frutas.includes("caju")
console.log(situacao)

let texto = frutas.join( ' - ')
console.log(texto)

//Função map
let numeros1 = [1,2,3,4,5,6]
let dobra = numeros1.map(x=>x*2)

console.log(dobra)

// Função Filter
let pares = numeros1.filter(x => x %2 == 0)
console.log(pares)

let loc = numeros1.find(x=> x>2)

console.log(loc)

let locend = numeros1.findIndex(x=> x>2)

console.log(locend)

let maior = numeros1.every(x=> x>6)

console.log(maior)


let numeros2 = [3,5,4,1,6,9,7,0,2]

console.log(numeros2.sort())

console.log(numeros2.reverse())