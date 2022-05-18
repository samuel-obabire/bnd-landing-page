import Button from "./Button"
import Card from "./Card"

import { linksData } from "../data/linksData"

const Links = () => {
  const buttons = linksData.map(({ text, link, id, headerOnly }) =>
    !headerOnly ? (
      <Button key={id} to={link}>
        {text}
      </Button>
    ) : null
  )
  return (
    <section>
      <Card reverse className="btn-links">
        {buttons}
      </Card>
    </section>
  )
}

export default Links
