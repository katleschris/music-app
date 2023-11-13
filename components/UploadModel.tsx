'use client'

import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import {useState} from 'react'
import {toast} from 'react-hot-toast'

import Model from './Model'
import useUploadModel from '@/hooks/useUploadModel'
import Input from './Input';
import Button from './Button';
import { useUser } from '@/hooks/useUser';

const UploadModel = () => {
    const [isLoading, setIsLoading] = useState(false)
    const uploadModel = useUploadModel();
    const { user} = useUser()

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
        try {
            setIsLoading(true);
            const imageFile = values.image?.[0];
            const songfile = values.song?.[0];

            if (!imageFile || !songfile || !user){
                toast.error('Missing fields');
                return
            }

        }catch (error) {
            toast.error('something went wrong');
        } finally {
            setIsLoading(false);
        }
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
                <Button disabled={isLoading} type='submit'>
                    Create
                </Button>
            </form>
        </Model>
    )
}

export default UploadModel