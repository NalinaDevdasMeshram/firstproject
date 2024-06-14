import {KgButton} from "./KgButton";
function Statement(){
    let Name = "nalina";
    const fullName ="Nalina Devdas Meshram";
    let future = ()=>{
        return <h1>welcome yourself</h1>
    }
 return <div>
    <h1>Welcome to react World {Name}</h1>
    <p>This is {fullName}</p>
    <p>{future()}</p>
    <KgButton></KgButton>
 </div>
}
export default Statement;