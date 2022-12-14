import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import Loading from './components/loading'

import { AppRoute } from './route'

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<Loading />}>
        <AppRoute />
      </Suspense>
    </RecoilRoot>
  )
}

export default App