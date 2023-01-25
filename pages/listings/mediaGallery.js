import mediaGalleryStyle from './mediaGallery.module.css'
import { ImageView } from '../../components/common/image-view'
import ThumbnailInput from '../../components/common/form/thumbnail-input'
import { useState } from 'react'

const MediaGalleryForm = () => {
    const Images = []
    const [imgGallery, setImgGallery] = useState('')

    const handleSetImgGallery = (id) => {
        setImgGallery(Images[id])
    }

    return (
        <>
            <div className={mediaGalleryStyle.info_1}>
                <div className={mediaGalleryStyle.info_1_1}>
                    <ImageView
                        id="picture_gallery"
                        src={imgGallery}
                        isLarge={true}
                        label="Picture Gallery"
                    />
                </div>
                <div className={mediaGalleryStyle.info_1_2}>
                    <div className={mediaGalleryStyle.thumbnailsContainer}>
                        {Images &&
                            Images.map((img, idx) => {
                                return <ImageView id={`thumbnails_${idx}`} key={idx} src={img} />
                            })}
                        <div className={mediaGalleryStyle.uploadImage}>
                            <button className={mediaGalleryStyle.uploadImageBtn}>+</button>
                        </div>
                        {/* {Images &&
                            Images.map((img, idx) => {
                                return (
                                    <ImageView
                                        id={`thumbnails_${idx}`}
                                        key={idx}
                                        src={img}
                                        onClick={() => {
                                            handleSetImgGallery(idx)
                                        }}
                                    />
                                )
                            })} 
                            <div className={mediaGalleryStyle.uploadImage}>
                            <ThumbnailInput
                                id="uploadForMediaGallery"
                                label="uploadForMediaGallery"
                                name="uploadForMediaGallery"
                                background="white"
                                autoComplete="off"
                                error={errors?.uploadForMediaGallery}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                setFieldValue={setFieldValue}
                                className={mediaGalleryStyle.uploadImageBtn}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={mediaGalleryStyle.info_2}>
                <div className={mediaGalleryStyle.info_1_1}>
                    <ImageView id="picture_gallery" src="" isLarge={true} label="Video Gallery" />
                </div>
                <div className={mediaGalleryStyle.info_1_2}>
                    <div className={mediaGalleryStyle.thumbnailsContainer}>
                        {Images &&
                            Images.map((img, idx) => {
                                return <ImageView id={`thumbnails_${idx}`} key={idx} src={img} />
                            })}
                        <div className={mediaGalleryStyle.uploadImage}>
                            <button className={mediaGalleryStyle.uploadImageBtn}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MediaGalleryForm
