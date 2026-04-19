import Gallery3D from "@/components/Gallery3D"
import ProductCatalog from "@/components/ProductCatalog"
import B2BForm from "@/components/B2BForm"
import AboutSection from "@/components/AboutSection"

const Index = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-screen">
        <Gallery3D />
        <ProductCatalog />
        <B2BForm />
      </div>
      <AboutSection />
    </div>
  )
}

export default Index