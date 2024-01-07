import { BlackContainer } from "../Containers";

function MultipleInputs({ id }) {
  return (
    <BlackContainer specialTitle={"Part 6 - Multiple Inputs"} idTitle={id}>
      <div>
        <form className='form'>
          <h4>Multiple Inputs</h4>
          {/* name */}
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input type='text' className='form-input' id='part6-03-multiple-input-name' />
          </div>
          {/* email */}
          <div className='form-row'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input type='email' className='form-input' id='part6-03-multiple-input-email' />
          </div>
          {/* email */}
          <div className='form-row'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input type='password' className='form-input' id='part6-03-multiple-input-password' />
          </div>

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
      </div>
    </BlackContainer>
  );
};
export default MultipleInputs;
