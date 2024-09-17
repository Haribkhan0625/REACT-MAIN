function Hello(){
  let myName = 'Harib';
  let number = 456;
  let fullName = () => {
    return 'Alpha Male'
  }
  return <p>MessageNo: {number} I am your master {fullName()}</p>
}
export default Hello;