import "./Time.css";

const Time = (props) => {

    const css = { backgroundColor: props.corSecundaria}

    return (
        <section className="time" style={css}>
            <h3 style={ { borderColor: props.corPrimaria } }>{props.nome}</h3>
        </section>
    )
}

export default Time;


// Um componen que só recebe informações mas não faz nada, é só visual
// é chamado de dumbcomponent