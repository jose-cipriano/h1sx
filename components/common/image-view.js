import Image from 'next/image'
import ImageViewStyle from './image-view.module.css'

export const ImageView = ({ src, alt = '', isLarge = false, label, ...props }) => {
    const largeStyle = {
        height: '300px',
    }

    return (
        <div
            className={ImageViewStyle.imageViewStyle}
            style={isLarge ? largeStyle : { height: '120px', cursor: 'pointer' }}
            {...props}
        >
            {src ? (
                <Image
                    src={src}
                    width="100%"
                    height="100%"
                    className={ImageViewStyle.img}
                    alt={alt}
                />
            ) : (
                <span className={ImageViewStyle.noImage}>{label}</span>
            )}
        </div>
    )
}
