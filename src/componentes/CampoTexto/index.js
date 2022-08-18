import { useState } from 'react';
import './CampoTexto.css';

const CampoTexto = (props) => {

    const campoplaceHolderModificada = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={campoplaceHolderModificada} />
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


// ESTUDAR O QUE É HUKS ==> Tem a ver com state (estado do objeto/coisa)