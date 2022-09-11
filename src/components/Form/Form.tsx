import React from 'react';
import './style.scss';

interface IFormData {
  name: string;
  email: string;
  message: string;
}
interface IErrorData {
  name: string | null;
  email: string | null;
  message: string | null;
}

const Form = () => {
  const [formValues, setFormValues] = React.useReducer(
    (prevState: IFormData, currentState: Partial<IFormData>) => ({
      ...prevState,
      ...currentState,
    }),
    {
      name: '',
      email: '',
      message: '',
    }
  );
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState<IErrorData>({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (errors[name as keyof typeof formValues])
      setErrors({ ...errors, [name]: null });
    setFormValues({ [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorFields: IErrorData = { ...errors };
    let hasError = false;
    for (const [key, value] of Object.entries(formValues)) {
      if (value === '') {
        errorFields[key as keyof typeof formValues] = 'Fill current field...';
        hasError = true;
      }
    }
    if (hasError) {
      return setErrors(errorFields);
    }

    setIsSubmitted(true);
    setFormValues({ name: '', email: '', message: '' });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div id="contact-form" className="contact">
      <div className="form-container">
        <div className="form-container__headers">
          <h3 className="heading-primary">Contact us</h3>
          <p className="contact__paragraph">
            Leave your contacts and we will call you in 5 minutes
          </p>
        </div>
        <form action="#" className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form__group">
            <input
              name="name"
              type="text"
              className={`form__input ${errors.name ? 'error' : ''}`}
              placeholder={errors.name ? errors.name : 'Name'}
              value={formValues.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="email"
              type="email"
              className={`form__input ${errors.email ? 'error' : ''}`}
              placeholder={errors.email ? errors.email : 'E-mail'}
              value={formValues.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input
            name="message"
            type="text"
            className={`form__message ${errors.message ? 'error' : ''}`}
            placeholder={errors.message ? errors.message : 'Your message...'}
            value={formValues.message}
            onChange={(e) => handleChange(e)}
          />
          {isSubmitted ? (
            <h3>Thank you for submitting!</h3>
          ) : (
            <button
              type="submit"
              className="button-primary button-primary--2 submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
