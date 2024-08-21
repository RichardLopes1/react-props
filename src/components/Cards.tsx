type AlunosProps = {
    nome: string;
    idade: Number;
    index: number;
}


export default function Cards({ nome, idade, index }: AlunosProps) {

    return (
        <div key={index}>
            <p>Aluno:{nome}</p>
            <p>Idade:{idade}</p>
        </div>
    )
}