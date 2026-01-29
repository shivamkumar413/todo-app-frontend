import { CreateTaskModal } from '@/components/molecules/CreateTaskModal/CreateTaskModal'
import { Router } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
        <CreateTaskModal />
      </QueryClientProvider>
    </>
  )
}

export default App
