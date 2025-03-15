export default function FormGroupDashBoard({ label, id,value, data, setValue, placeHolder, inputType = 'text', customClass = [] }) {
  
  return (
    <div className={`text-end ${customClass.join(' ')}`}>
      {label && (
        <label className='form-label' id={id} htmlFor=''>
          {label}
        </label>
      )}
      <input
        className='form-control'
        value={data? data.id :value}
        onChange={e => {
          setValue(data?{ ...data, [id]: e.target.value }:value);
        }}
        type={inputType}
        placeholder={placeHolder}
      />
    </div>
  );
}
