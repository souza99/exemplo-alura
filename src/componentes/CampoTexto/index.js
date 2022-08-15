import './CampoTexto.css';

const CampoTexto = (props) => {

    const campoplaceHolderModificada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={campoplaceHolderModificada} />
        </div>
    )
}

export default CampoTexto;
