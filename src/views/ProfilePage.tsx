import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import api from '../components/api';

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  // const [hasError, setError] = useState(false);
  // const navigate = useNavigate();

  // const handleLoginSubmit = (values: { username: string; password: string; }) => {
  //     return api
  //       .login(values.username, values.password)
  //       .then((result: any) => {
  //         console.log('access_token', result.data.access_token);
  //         setIsSuccessfullySubmitted(result.status === 200);
  //         localStorage.setItem('access_token', result.data.access_token);
  //         setError('');
  //         navigate("/dashboard")
  //         reset();
  //       })
  //       .catch(() => {
  //         setError('Błędne dane logowania');
  //         reset();
  //         setIsLoading(false)
  //       });
  //   };

  useEffect(() => {
    api
      .getProfile()
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setMovie(data);
      //       setLoading(false);
      //     })
      //     .catch((error) => {
      //       setError(true);
      //       setLoading(false);
      //     });
      //   }, [movieId]);
      .then((result: any) => {
        setProfile(result.data);
        localStorage.setItem('result', result.data);
        // navigate("/dashboard")
      })
      .catch((_error) => {
        // setError(true);
        // setLoading(false)
      });
  }, []);

  return (
    <section>
      <div>profile</div>
      <div>{profile}</div>
    </section>
  );
}

export default ProfilePage;
