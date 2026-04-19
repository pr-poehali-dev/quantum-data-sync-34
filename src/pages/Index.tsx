import Gallery3D from "@/components/Gallery3D"
import ProductCatalog from "@/components/ProductCatalog"
import B2BForm from "@/components/B2BForm"

const Index = () => {
  return (
    <div className="relative w-full h-screen">
      <Gallery3D />
      <ProductCatalog />
      <B2BForm />
    </div>
  )
}

export default Index