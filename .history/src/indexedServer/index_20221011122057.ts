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

  private constructor() {}

  private async setup(): Promise<void> {
    this.db = await openDB('players')
  }

  public createPlayer(): void {
    this.db.createObjectStore('players')
  }

  public static async getInstance(): Promise<Player> {
    if (Player.instance === undefined) {
      Player.instance = new Player()
      await Player.instance.setup()
    }

    return Player.instance
  }
}

export default Player
