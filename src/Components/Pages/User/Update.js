import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
    const {register, handleSubmit, setValue} = useForm();

    const {userId} = useParams();

    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`);
        setValue('sr', result.data.sr);
        setValue('country', result.data.country);
        setValue('capital', result.data.capital);
    }
    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/show');
    }
    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
    <div className='container w-50 mt-5'>
        <h2><u>COUNTRY UPDATE INFORMATION</u></h2>
        <form onSubmit={handleSubmit(saveData)} className='mt-5'>

                <label htmlFor='s'><u>SR NO</u></label>
                <input type='number' id='s' className='form-control' {...register('sr')} />
                <br /> <br />

                <label htmlFor='n'><u>COUNTRY NAME</u></label>
                <input type='text' id='n' className='form-control' {...register('country')} />
                <br /> <br />

                <label htmlFor='c'><u>CAPITAL</u></label>
                <input type='text' id='c' className='form-control' {...register('capital')} />
                <br /> <br />

                <input type='submit' value="UPDATE COUNTRY"  className='btn btn-outline-success col-6' />
                <input type='reset' value="RESET" className='btn btn-outline-warning col-3' />

        </form>
    </div>
</>
  )
}

export default Update