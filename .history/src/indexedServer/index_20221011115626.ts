import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: 
  constructor() {
    this.setup()
  }

  private async setup() {
    this.db = await openDB('player')
  }
  
  public createPlayer() {
    // this.db.
  }
}

export default Player
