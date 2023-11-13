'use client'

import Model from './Model'
import useUploadModel from '@/hooks/useUploadModel'

const UploadModel = () => {
    const uploadModel = useUploadModel();

    const onChange = (open: boolean) => {
        if(!open){
            //reset form
            uploadModel.onClose();
        }
    }

    return (
        <Model
            title='Upload model title'
            description='Upload model description'
            isOpen = {uploadModel.isOpen}
            onChange={onChange}
        >Upload Content
        </Model>
    )
}

export default UploadModel