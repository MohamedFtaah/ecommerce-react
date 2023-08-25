import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';
import ViewDetalisProductHook from '../../hook/product/view-detalis-product-hook';
import mobile from '../../images/mobile.png'
import { useParams } from 'react-router-dom';

const ProductGallery = () => {
    const { id } = useParams()

    const [detalisProductData, images] = ViewDetalisProductHook(id)





    return (
        <div className="product-gallary-card d-flex justfiy-content-center  align-items-center
        pt-2">
            <ImageGallery items={images}
                defaultImage={mobile}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
            />
        </div>
    )
}

export default ProductGallery
