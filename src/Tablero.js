export default function Tablero(props){
    return (
        <div id="tablero">
            {props.estado.map((tab,index)=>{
                return( <div>{tab}</div>
                    
                    

            )})}
        </div>
    )
}