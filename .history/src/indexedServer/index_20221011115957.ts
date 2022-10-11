import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: IDBPDatabase<PlayerDB>
  constructor() {
    this.setup()
  }

  private async setup(): Promise<void> {
    this.db = await openDB('player')
  }

  public createPlayer(): void {
    this.db.createObjectStore('players')
  }
}

export default Player
