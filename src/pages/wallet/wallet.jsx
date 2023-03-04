export function Slide (props){
console.log(props);
   
        return (
          <div
            className="slide"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
          </div>
        );
      
      
      
}
