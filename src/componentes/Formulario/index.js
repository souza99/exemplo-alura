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

    return (
        <section className='formulario'>
            <form>
                <h2>Preenchar os dados para criar os cards de colaborador</h2>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome"
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
            </form>
        </section>
    );
}

export default Formulario;
