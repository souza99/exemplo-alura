import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../LiscaSuspensa';
import './Formulario.css';

const Formulario = () => {

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Moblile',
        'Inovação e gestão'
    ];

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("form foi submetido");
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preenchar os dados para criar os cards de colaborador</h2>
                <CampoTexto
                    label = "Nome"
                    placeholder = "Digite seu nome"
                    obrigatorio = {true}
                />
                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereco da imagem"
                />
                <ListaSuspensa label="Time" itens={times} />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;


// <Botao>
//    Criar card
// </Botao>
// Quando abrimos e fexamos um componente, estamos dizendo que vamos receber um conteudo
// que do locar onde estamos invocando o componente vai ter que ler
// como imagens, icones e textos, então o componente recebe isso como childrem, filhos de seu conteudo criado
// originalmente


// evento 
// o evento é o evento do próprio javaScript
// é o comportamento padrão;