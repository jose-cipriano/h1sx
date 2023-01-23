import mediaGalleryStyle from './mediaGallery.module.css'
import { ImageView } from '../../components/common/image-view'

export const MediaGalleryForm = () => {
    const Images = [
        'https://loremflickr.com/320/240?random=1',
        'https://loremflickr.com/320/240?random=2',
        'https://loremflickr.com/320/240?random=3',
        'https://loremflickr.com/320/240?random=4',
    ]

    return (
        <>
            <div className={mediaGalleryStyle.info_1}>
                <div className={mediaGalleryStyle.info_1_1}>
                    <ImageView id="picture_gallery" src={Images[0]} isLarge={true} />
                </div>
                <div className={mediaGalleryStyle.info_1_2}>
                    <div className={mediaGalleryStyle.thumbnailsContainer}>
                        {Images?.length &&
                            Images.map((img, idx) => {
                                return <ImageView id={`thumbnails_${idx}`} key={idx} src={img} />
                            })}
                        <div className={mediaGalleryStyle.uploadImage}>
                            <button className={mediaGalleryStyle.uploadImageBtn}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={mediaGalleryStyle.info_2}>
                <div className={mediaGalleryStyle.info_1_1}>
                    <ImageView id="picture_gallery" src="" isLarge={true} label="Video Gallery" />
                </div>
                <div className={mediaGalleryStyle.info_1_2}>
                    <div className={mediaGalleryStyle.thumbnailsContainer}>
                        {Images.length &&
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
