import { Page } from "@/components/Page";
import { Products } from "@/components/Products";

export default function BusinessPage() {
  return (
    <Page
      title = "Essential business products"
      description = "Business essentials such as business cards, flyers, posters and more"
    >
      <Products category="business" />
    </Page>
  )
}