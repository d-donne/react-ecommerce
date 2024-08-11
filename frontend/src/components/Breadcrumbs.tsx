import { ChevronRight } from "lucide-react"
import { Link} from "react-router-dom"

type props = {
  productCategory: string
  productName: string
}
const Breadcrumbs = ({ productCategory, productName }: props) => {
  
  return (
    <div className="container mt-5 text-zinc-500">
      <span>HOME</span> <ChevronRight />
      <span>SHOP</span> <ChevronRight />
      <Link to={`/${productCategory}`}>{productCategory}</Link> <ChevronRight />
      <span>{productName}</span>
    </div>
  )
}

export default Breadcrumbs