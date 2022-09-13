/*
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

  O resultado final desse desafio deve ser algo em torno de:
  
  💡 Dica: para quebrar uma linha no `alert()` basta usar um **\n** na mensagem. 😛


  Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
  Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀

  ****E aí, topa encarar esse desafio? **💜**
  Vai ser muito importante para o seu aprendizado rever e aplicar esses novos conceitos. 

  *****Lembrando*: tente se desafiar mas, caso apareça alguma dificuldade, você pode ir no nosso **[fórum](https://app.rocketseat.com.br/h/forum/explorer)** e deixar sua dúvida por lá! 
  Boa sorte e boooooora codar! **🚀**
*/

const students = [
  {
    name: "Pedro",
    first_test_grade: 5,
    second_test_grade: 8,
},
{
  name: "Lucas",
    first_test_grade: 10,
    second_test_grade: 6,
},
{
  name: "Ana",
    first_test_grade: 8,
    second_test_grade: 7,
},
{
  name: "Karla",
    first_test_grade: 9,
    second_test_grade: 3,
}
]

function media(first_test_grade, second_test_grade) {
  return ((first_test_grade + second_test_grade) / 2 .toFixed(2))
}

function test(student) {
  return `
  A média do aluno ${student.name} é de ${media(student.first_test_grade, student.second_test_grade)}
  `
}

for(let student of students) {
  let media_message = test(student)
  alert(media_message)
}

/*
if(media >= 7) {
  alert(`A média do aluno(a) ${student.name} é de ${media(student.first_test_grade, student.second_test_grade)}
  Parabens! ${student.name}! Você foi aprovado(a) no concurso!`)
}else {
  alert(`A média do aluno(a) ${student.name} é de ${media(student.first_test_grade, student.second_test_grade)}
  Não foi dessa vez! ${student.name}! Tente novamente!`)
}
*/