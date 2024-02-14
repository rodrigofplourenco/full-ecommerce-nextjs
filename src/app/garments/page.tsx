import { Page } from "@/components/Page";
import { Products } from "@/components/Products";

export default function GarmentsPage() {
  return (
    <Page
      title = "Garment Printing"
      description = "Print your design onto any garment"
    >
      <Products category="garments" />
    </Page>
  )
}