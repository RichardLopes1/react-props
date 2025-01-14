type Comp1Props = {
    children: React.ReactNode;
}

type Comp2Props = {
    autor: string;
}

export default function Componente1({ children, autor }: Comp1Props & Comp2Props) {

    return (
        <div>
            <h2>Componente 1</h2>
            {children}
            <p>Mensagem enviada pelo {autor}</p>

        </div>
    )
}