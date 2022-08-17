import './CampoTexto.css';

const CampoTexto = (props) => {

    const campoplaceHolderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        console.log(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={campoplaceHolderModificada} />
        </div>
    )
}

export default CampoTexto;


// onChange
// a funcao onChange atualizar a cada palavra digitada o valor do campo
// atualiza a cada auteração

// evento
// "evento" é o evento javaScript
// para pegar o valor que está sendo digitado usamos
// evento.target.value
// "target" é uma funcao do javaScript