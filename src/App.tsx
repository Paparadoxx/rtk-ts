import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';


function App() {
  const dispatch = useDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)

  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])

  return (
    <div >
      {isLoading && <h3>Идёт загрузка..</h3>}
      {error && <h3>{error}</h3>}
      {JSON.stringify(users, null, 3)}
    </div>
  );
}

export default App;
