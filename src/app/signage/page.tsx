import { Page } from "@/components/Page";
import { Products } from "@/components/Products";

export default function SignagePage() {
  return (
    <Page
      title = "Signage"
      description = "Your signage"
    >
      <Products category="signage" />
    </Page>
  )
}