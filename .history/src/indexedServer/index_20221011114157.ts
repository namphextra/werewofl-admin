class Player {
  db: IDBOpenDBRequest
  public openDB(): void {
    this.db = indexedDB.open('player')
  }
}

export default Player
