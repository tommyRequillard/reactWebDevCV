import * as React from "react"

export default function Paragraph({children}: React.PropsWithChildren) {
  return <p className="mb-4">{children}</p>
}


