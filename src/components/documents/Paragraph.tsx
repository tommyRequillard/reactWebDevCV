import * as React from "react"
import Typography from "@mui/material/Typography"

export default function Paragraph({children}: React.PropsWithChildren) {
  return <Typography paragraph>{children}</Typography>
}


