
import product from '../product'

const Image = () => {
  return (
    <img src={product.image} alt={product.image}  style={{width:400,height:250}}/>
  )
}

export default Image