interface props{
    text:string;
}

const alert = ({text}:props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
    </div>
  );
}
export default alert
