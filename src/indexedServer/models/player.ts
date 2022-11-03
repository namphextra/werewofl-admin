export interface PlayerAction {
  toKill: string
  toSave: string
  toShoot: string
}

export interface Player {
  name: string
  id?: number
  charactor?: string
  isDead?: boolean
  action?: PlayerAction
}