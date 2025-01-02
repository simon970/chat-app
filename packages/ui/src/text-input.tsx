
interface PropType{
    placeholder:string,
    size:"big"| "small",
    onChange?:(e:any)=>void
  
}

export function TextInput({
    placeholder,size,onChange
}:PropType){
    return <input placeholder={placeholder} onChange={onChange} type="text" style={{
        padding:size ==="big"?20:10,
        border:size ==="big"?20:10,
        borderColor:"black",
        borderWidth: 1 ,
        
      }}></input>
}