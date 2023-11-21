// singleton -> GoF | Factory method -> Gof
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
  //factory method -> quando o metodo de uma classe cria um novo objeto
  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia ja criada.');
      return Database.database;
    }
    console.log('Criando nova instancia');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDatabase('localhos', 'root', '123456');
db1.connect();
const db2 = Database.getDatabase('localhos', 'root', '123456');
db2.connect();
const db3 = Database.getDatabase('localhos', 'root', '123456');
db1.connect();
const db4 = Database.getDatabase('localhos', 'root', '123456');
db2.connect();

console.log(db1 === db2);
console.log(db3 === db4);
