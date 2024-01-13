
import { WhiteContainer } from '../Containers';

import useFetchUser from './fetchData/useFetchUser';

function FetchData({ id }) {
  const gitHubUser = 'Rychy248';

  const [isLoading, isError, user] = useFetchUser(gitHubUser)

  return (
    <WhiteContainer specialTitle="Part 8 Custom Hooks - Fetch Data" idTitle={ id } >

      { isLoading && <h2>Loading...</h2> }

      { isError && <h2>There was an error</h2> }
      
      { !isLoading && ! isError && (
        <div>
          <img
            style={{ width: '100px', borderRadius: '25px' }}
            src={user.avatar_url}
            alt={user.name}
          />
          <h2>{user.name} -&gt; Public repos: {user.public_repos}</h2>
          <h4>Followers: {user.followers} Following: {user.following}</h4>
          <p>{user.bio}</p>
        </div>
      )}

    </WhiteContainer>
  );
};
export default FetchData;
