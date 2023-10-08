
const FormInput = (props) => {
  const { error, onChange, placeholder, ...inputProps  } = props;

  const isEmailInput = inputProps.name === 'email';
  const classData = error ? "form-input border-red-400" : 'form-input'



  return (
    <>
        <input className={classData}
            onChange={onChange}
            placeholder={isEmailInput && error ? 'example@example.com' : placeholder}
            {...inputProps}
        />
      {error && <p className="text-primary-red text-2xs text-end pt-1 font-medium italic pr-1">{error}</p>}
      </>
      
  );
};

export default FormInput;