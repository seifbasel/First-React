interface props{
    children:string


}
export const Button = ({children}:props) => {
  return (
    <button type="button" className="btn btn-danger">
      {children}
    </button>
  );
}
