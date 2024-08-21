import Componente1 from "./components/Conponente1"
import Cabecalho from "./components/cabecalho"


function App() {

  const titulo: string = "Aula React Props"  //sempre que criar uma variavel, ja colocar o tipo dela.
  const codigo: number = 15

  const informacao = () => {
    alert('Esta aula fala sobre a passagem de dados.')
  }

  const autor string = "Coordenador de Vendas"

  const alunos = [
    { nome: 'João', idade: 18 },
    { nome: 'Richard', idade: 18 },
    { nome: 'luis', idade: 18 }
  ]

  return (
    <>
      <Cabecalho titulo={titulo} codigo={codigo} info={informacao} />
      <Componente1 autor={autor}>
        <p>Aqui o componente</p>
      </Componente1>
      {
        alunos.map((aluno,)(Cards nome = { alunos.nome } idade = { alunos.idade />)))
      }
    </>
  )
}

export default App
