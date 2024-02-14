import { Page } from "@/components/Page";
import { Products } from "@/components/Products";

export default function VinylPage() {
  return (
    <Page
      title = "Bespoke Vinyl Printing"
      description = "Printing onto various self adhesive vinyls"
    >
      <Products category="vinyl" />
    </Page>
  )
}
