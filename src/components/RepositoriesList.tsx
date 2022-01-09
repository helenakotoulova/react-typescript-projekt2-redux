import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useActions} from '../hooks/useActions';
// naimportujeme action creators z toho hlavniho index.ts ve state (ten, jak jsou v nem ty *)
import {actionCreators} from '../state';
import { useTypedSelector } from '../hooks/useTypedSelector';


const RepositoriesList: React.Fc = () => {
    const [term, setTerm]= useState('');
    const {searchRepositories} = useActions();
    // kdyz pouzijeme ten useTypedSelector tak uz react pochopi, jaky ma state type.
    const {data,error,loading} = useTypedSelector((state)=>state.repositories);

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
}
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' onChange={e => setTerm(e.target.value} value={term}/>
        <button type='submit'>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading &&
        data.map((name)=> <div key={name}>{name}</div>)
    }
    </div>
  );
};

export default RepositoriesList;
