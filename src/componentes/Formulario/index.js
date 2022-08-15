import CampoTexto from '../CampoTexto';
import './Formulario.css';

const Formulario = () => {
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
            </form>
        </section>
    );
}

export default Formulario;
