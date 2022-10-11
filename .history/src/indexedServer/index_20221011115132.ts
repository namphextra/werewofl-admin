import { openDB, DBSchema } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: PlayerDB
  constructor() {
    this.db = openDB('player')
  }

  public createPlayer() {
    // this.db.
  }
}

export default Player
