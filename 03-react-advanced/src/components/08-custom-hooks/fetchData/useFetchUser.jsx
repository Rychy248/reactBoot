
import { useEffect, useState } from 'react';

function useFetchUser( gitHubUser ) {
  const url = `https://api.github.com/users/${gitHubUser}`;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        // console.log(resp);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
        }else{
          const user = await resp.json();
          // console.log(user);
          setUser(user);
        }        
      } catch (error) {
        setIsError(true);
        // console.log(error);
      };
      // hide loading
      setIsLoading(false);
    };

    const timeId = setTimeout(() => {
      fetchUser();
    }, 1000);

    return ()=>{
      clearTimeout(timeId);
    };

  }, []);

  // order matters
  // don't place user JSX before loading or error

  return [isLoading, isError, user];
};

export default useFetchUser;