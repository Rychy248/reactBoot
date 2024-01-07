import { WhiteContainer } from "../Containers";

function UserChallenge({ id }) {
  return (
    <WhiteContainer specialTitle="Part 6 - Controlled input" idTitle={id}>
      <div>
        <form className='form'>
          <h4>Add User</h4>
          <div className='form-row'>
            <label htmlFor='name' className='form-label'>
              name
            </label>
            <input type='text' className='form-input' id='part6-02-user-challenge-name' />
          </div>

          <button type='submit' className='btn btn-block'>
            submit
          </button>
        </form>
        {/* render users below */}
      </div>
    </WhiteContainer>
  );
};
export default UserChallenge;
