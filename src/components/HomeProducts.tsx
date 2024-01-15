type HomeProductProps = {
    src: string;
    price:string;
    productName:string;
}

export default function HomeProducts ({src,productName,price}:HomeProductProps){
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