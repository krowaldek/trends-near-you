import { useRouter } from 'next/router'
import React from 'react'

function Trend () {
  const router = useRouter()
  const { id } = router.query
  return <div>Trend {id}</div>
}

export default Trend
