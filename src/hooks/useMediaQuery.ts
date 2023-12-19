import { useMediaQuery, useTheme } from "@mui/material"


const useMediaQueryAdapter = () => {
  const theme = useTheme()

  const miniSm = useMediaQuery(theme.breakpoints.down(400))
  const maxSm = useMediaQuery(theme.breakpoints.down(500))
  const sm = useMediaQuery(theme.breakpoints.down('sm'))
  const miniMd = useMediaQuery(theme.breakpoints.down(700))
  const midSm = useMediaQuery(theme.breakpoints.down(750))
  const md = useMediaQuery(theme.breakpoints.down('md'))
  const midMd = useMediaQuery(theme.breakpoints.down(1000))
  const tablet = useMediaQuery(theme.breakpoints.down(1025))
  const maxMd = useMediaQuery(theme.breakpoints.down(1100))
  const lg = useMediaQuery(theme.breakpoints.down('lg'))
  const tv = useMediaQuery(theme.breakpoints.down(1250))
  const xl = useMediaQuery(theme.breakpoints.down('xl'))

  return {
    miniSm,
    maxSm,
    sm,
    miniMd,
    midSm,
    md,
    midMd,
    tablet,
    maxMd,
    lg,
    tv,
    xl,
  }
}

export default useMediaQueryAdapter