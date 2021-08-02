import React,{useState,useEffect} from 'react';
import '../../App.css'
import { NativeSelect,FormControl } from '@material-ui/core';
import { country } from '../../api';
const CountyPicker = ({handleCountry}) =>{
    const [fetchedCountries, setfetchedCountries] = useState([])
    useEffect(() => {
        const fetchedCountries = async () =>{
            setfetchedCountries(await country());
        }
        fetchedCountries();
    }, [])
    return(
       <FormControl className='form-Control'>
         <NativeSelect defaultValue="Global" variant='filled' onChange={(e)=> handleCountry(e.target.value)}>
          <option value="Global" placeholder="Global"></option>
          {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)}
         </NativeSelect>
       </FormControl>
    )
}
export default CountyPicker ;