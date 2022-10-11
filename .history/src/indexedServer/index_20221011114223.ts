class Player {
  db: IDBOpenDBRequest
  constructor() {
    this.db = indexedDB.open('player')
  }
}

export default Player
