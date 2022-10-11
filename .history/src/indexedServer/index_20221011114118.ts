class Player {
  db: IDBOpenDBRequest
  public openDB() {
    this.db = indexedDB.open('player')
  }
}

export default Player
