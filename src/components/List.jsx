import "./index.css";
function List(props){
    const itemList=props.items;
    const category=props.category;


    
    // fruits.sort((a,b)=> a.name.localeCompare(b.name));
    // fruits.sort((a,b)=> a.calorie - b.calorie);
    //fruits.sort((a,b)=> b.calorie - a.calorie);
    // fruits.sort((a,b)=> b.name.localeCompare(a.name));
   // const lowCalFruits=fruits.filter(fruit=>fruit.calorie<100);
    const listItems=itemList.map(item=><li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.calorie}</b></li>);
    return (
        <>
        <h3 className="list-category">{category}</h3>
        <ol
            className="list-items">{listItems}
        </ol>
        </>
    )
}
export default List;
