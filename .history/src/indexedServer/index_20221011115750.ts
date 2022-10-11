import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: IDBPDatabase<PlayerDB>
  constructor(): void {
    this.setup()
  }

  private async setup(): Promise<void> {
    this.db = await openDB('player')
  }

  public createPlayer() {
    // this.db.
  }
}

export default Player
