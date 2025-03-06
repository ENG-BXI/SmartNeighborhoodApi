function LoginWith(props) {
  return (
    <div className='d-flex align-items-center column-gap-3 border rounded px-3 py-1 shadow-sm mb-3'>
      <img src={props.logo} alt={props.logo} />
      <p className='mb-1'>{props.title}</p>
    </div>
  );
}

export default LoginWith;