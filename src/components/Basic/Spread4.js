
const studenInfo=[{sname:"Aji",Sage:3,sschool:"xyz"},{sname:"Vji",Sage:13,sschool:"xyz"},{sname:"Kavi",Sage:33,sschool:"xyz"}]

function Spread4(props){
return(
   <>
   <ul>
    <li>Sname :{props.sname} </li>
    <li>Sage : {props.Sage}</li>
    <li>sschool: {props.sschool}</li>
   </ul>
   </> 
)
}
function SpredingStudent(){
    return(
        <div>
            <h3>Class 4 : Spreading...</h3>
            <h4>Student Info</h4>
            {studenInfo.map((sinfo) =>{
            return(
                <Spread4 {...sinfo} />
            )             
        }
        )}
        </div>  
    )
}
export default SpredingStudent;