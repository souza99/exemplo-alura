import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div  className='lista-suspenca'>
            <label>
                {props.label}
            </label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return (
                        <option key={item}>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;

//toda lista em javaScript possui o metodo map
//map  == retorna para cada item da lista ele retorna um Arrey novo manipulado
//alem de percorrer a lista, ele retorna uma outra coisa.
//tenho uma lista de nomes e transformo em uma lista de options

//key == serve para o react identificar quando renderizar a tela
// sem a chave, em componentes conplexos ele começa a se perder
// não sabe quem é quem e se deve atualizar a tela