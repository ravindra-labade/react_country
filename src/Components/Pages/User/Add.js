import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit } = useForm();

    const navi = useNavigate()

    function saveData(data){
        axios.post('http://localhost:5000/users', data);
        navi('/show')

    }
  return (
    <>
        <div className='container w-50 mt-5'>
            <h2><u>COUNTRY INFORMATION</u></h2>
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

                    <input type='submit' value="ADD COUNTRY"  className='btn btn-outline-success col-6' />
                    <input type='reset' value="RESET" className='btn btn-outline-warning col-3' />

            </form>
        </div>
    </>
  )
}

export default Add