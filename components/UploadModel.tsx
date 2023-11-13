'use client'

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import {useState} from 'react'

import Model from './Model'
import useUploadModel from '@/hooks/useUploadModel'
import Input from './Input';

const UploadModel = () => {
    const [isLoading, setIsLoading] = useState()
    const uploadModel = useUploadModel();

    const {register, handleSubmit, reset} = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title:'',
            song: null,
            image: null,
        }
    })

    const onChange = (open: boolean) => {
        if(!open){
            reset();
            uploadModel.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        //upload to supabase
    }

    return (
        <Model
            title='Add a song'
            description='Upload an mp3 file'
            isOpen = {uploadModel.isOpen}
            onChange={onChange}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    id= 'title'
                    disabled = {isLoading}
                    {...register('title', { required: true})}
                    placeholder='Song title'
                />
            </form>
        </Model>
    )
}

export default UploadModel