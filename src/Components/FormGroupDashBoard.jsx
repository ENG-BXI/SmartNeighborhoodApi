export default function FormGroupDashBoard({label, id, isRequired, value, isDate = false, data, setValue, placeHolder, inputType = 'text', customClass = []}) {
  function convertToISOString(dateString) {
    const date = new Date(dateString); // تحويل النص لتاريخ
    return date.toISOString(); // تحويله إلى تنسيق ISO 8601
  }
  return (
    <div className={`text-end ${customClass.join(' ')}`}>
      {label && (
        <label className='form-label' id={id} htmlFor=''>
          {label}
        </label>
      )}
      <input
        className='form-control'
        required={isRequired}
        value={data ? data.id : value}
        onChange={e => {
          setValue(data ? (isDate ? {...data, [id]: convertToISOString(e.target.value)} : {...data, [id]: e.target.value}) : value);
        }}
        type={inputType}
        placeholder={placeHolder}
      />
    </div>
  );
}
