import ImageViewStyle from './image-view.module.css'
// import Image from 'next/image'

export const ImageView = ({ src, alt = '', isLarge = false, label, ...props }) => {
    const largeStyle = {
        height: '300px',
    }

    return (
        <div
            className={ImageViewStyle.imageViewStyle}
            style={isLarge ? largeStyle : { height: '120px' }}
            {...props}
        >
            {src ? (
                // TODO should be change with Next/Image
                <img
                    alt={alt}
                    src={src}
                    width="100%"
                    height="100%"
                    className={ImageViewStyle.img}
                />
            ) : (
                <span className={ImageViewStyle.noImage}>{label}</span>
            )}
        </div>
    )
}
{
    /* <img alt={alt} src={src} width="100%" height="100%" className={ImageViewStyle.img}/> */
}
