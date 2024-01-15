import { Link } from "react-router-dom"
type HomeProductProps = {
    link: string;
    src: string;
    price:string;
    productName:string;
}

export default function HomeProducts ({src,productName,price,link}:HomeProductProps){
const backgroundImage:React.CSSProperties = {
backgroundImage:`url(${src})`
}
    return (
        <div className="product-offered">
            <div className="product-image" style={backgroundImage}>
            <div className="product-description">
                <p>
                Price: ${price}
                </p>
                <h3>{productName}</h3>
            </div>
            </div>
      
        </div>
    )
}