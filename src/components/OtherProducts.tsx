type OtherProductsProps = {
    src: string;
    name: string;
    description : string;
}

const OtherProducts = ({src,name,description}:OtherProductsProps) => {
  return (
    <div className="other-products">
        <img src={src} alt={description} />
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default OtherProducts