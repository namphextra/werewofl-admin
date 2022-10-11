import { openDB, DBSchema, IDBPDatabase, IDBPObjectStore } from 'idb'

interface PlayerDB extends DBSchema {
  players: {
    value: string
    key: number
  }
}

class Player {
  db: IDBPDatabase<PlayerDB>
  objectStore: IDBPObjectStore<PlayerDB>
  private static instance: Player

  private constructor() {}

  private async setup(): Promise<void> {
    this.db = await openDB('players', 1, {
      upgrade(db) {
        db.createObjectStore('players', {
          keyPath: 'id',
          autoIncrement: true,
        })
      },
    })
    // this.createPlayer()
  }

  // private createPlayer(): void {
  //   this.objectStore = this.db.createObjectStore('players', {
  //     keyPath: 'id',
  //     autoIncrement: true,
  //   })
  // }

  public async addPlayer(player: string) {
    await this.db.add('players', { name: player })
  }

  // public getDB(): IDBPDatabase<PlayerDB> {
  //   return this.db
  // }

  public static async getInstance(): Promise<Player> {
    if (Player.instance === undefined) {
      Player.instance = new Player()
      await Player.instance.setup()
    }

    return Player.instance
  }
}

export default Player
