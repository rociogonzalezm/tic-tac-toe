export default function Tablero(props){
    return (
        <div id="tablero">
           { props.estado.map((r,i)=>{
                return(
                    <div id="fila" key={i}>
                       { r.map((c,j)=>{
                            return(
                                    <button key={j} onClick={()=>props.onClick(props.turno,i,j)}>{c}</button>      
                        )})
                    }</div>
                )})
        }</div>
)
}