import Dexie, {Table} from 'dexie'
import {Player} from './models/player'

class AppDexie extends Dexie {
  players!: Table<Player>

  constructor() {
    super('werewolf_admin')
    this.version(1).stores({
      players: '++id, name, charactor'
    })
  }

  /**
   * addPlayer
   */
  public async addPlayer(player: string) {
    await this.players.add({name: player})
  }
  
  public async removePlayer(id: number) {
    await this.players.delete(id)
  }
  
  public async getPlayers() {
    return await this.players.toArray()
  }
}

export const db = new AppDexie()
