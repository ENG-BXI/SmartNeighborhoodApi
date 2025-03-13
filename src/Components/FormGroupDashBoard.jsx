export default function FormGroupDashBoard({ label, placeHolder, inputType = 'text', customClass=[] }) {
  return (
    <div className={`text-end ${customClass.join(' ')}`} >
    {label&& <label className='form-label' htmlFor=''>{label}</label>} 
      <input className='form-control' type={inputType} placeholder={placeHolder} />
    </div>
  );
}