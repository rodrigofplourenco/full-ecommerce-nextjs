import { Page } from "@/components/Page";
import { Products } from "@/components/Products";

export default function DesignPage() {
  return (
    <Page
      title = "Design services"
      description = "Design services such as logo design, business cards, flyers and more"
    >
      <Products category="design" />
    </Page>
  )
}