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
                className='flex flex-col gap-y-4'
            >
                <Input
                    id= 'title'
                    disabled = {isLoading}
                    {...register('title', { required: true})}
                    placeholder='Song title'
                />
                <Input
                    id= 'artist'
                    disabled = {isLoading}
                    {...register('artist', { required: true})}
                    placeholder='Artist/singer'
                />
                <div>
                    <div className='pb-1'>
                        Select mp3 file
                    </div>
                    <Input
                    id= 'song'
                    type='file'
                    disabled = {isLoading}
                    accept='.mp3'
                    {...register('song', { required: true})}
                />
                </div>
                <div>
                    <div className='pb-1'>
                        Select image
                    </div>
                    <Input
                    id= 'image'
                    type='file'
                    disabled = {isLoading}
                    accept='image/*'
                    {...register('image', { required: true})}
                />
                </div>
            </form>
        </Model>
    )
}

export default UploadModel