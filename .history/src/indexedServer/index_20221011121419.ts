import { openDB, DBSchema, IDBPDatabase } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: IDBPDatabase<PlayerDB>
  private static instance: Player

  private constructor() {
    // this.setup()
  }

  private async setup(): Promise<void> {
    this.db = await openDB('players')
  }

  public createPlayer(): void {
    this.db.createObjectStore('players')
  }

  public static getInstance(): Player {
    if (!Player.instance) {
      Player.instance = new Player()
    }

    return Player.instance
  }
}

export default Player
