import './CampoTexto.css';

const CampoTexto = (props) => {

    const campoplaceHolderModificada = `${props.placeholder}...`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={campoplaceHolderModificada} />
        </div>
    )
}

export default CampoTexto;
