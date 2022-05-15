import Button from "./Button"
import Card from "./Card"

import { linksData } from "../data/linksData"

const Links = () => {
  const buttons = linksData.map(({ text, link, id }) => {
    return (
      <Button key={id} to={link}>
        {text}
      </Button>
    )
  })
  return (
    <section>
      <Card reverse className="btn-links">
        {buttons}
      </Card>
    </section>
  )
}

export default Links
