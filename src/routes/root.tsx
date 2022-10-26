import { fetchPlayers } from '@store/slices/players'
import { useAppDispatch } from '@store/hooks'

export async function rootLoader() {
  const dispatch = useAppDispatch()
  dispatch(fetchPlayers())
  return {}
}
