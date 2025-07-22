export enum TipoContato {
  Amigo = 'Amigo',
  Familia = 'Familia',
  Trabalho = 'Trabalho',
  Outro = 'Outro'
}

export class Contato {
  private nome: string;
  private telefone: string;
  private email: string;
  private aniversario: Date;
  private tipo: TipoContato;

  constructor(nome: string, telefone: string, email: string, aniversario: Date, tipo: TipoContato) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

  getNome(): string {
    return this.nome;
  }

  getTelefone(): string {
    return this.telefone;
  }

  getEmail(): string {
    return this.email;
  }

  getAniversario(): Date {
    return this.aniversario;
  }

  getTipo(): TipoContato {
    return this.tipo;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  setAniversario(aniversario: Date): void {
    this.aniversario = aniversario;
  }

  setTipo(tipo: TipoContato): void {
    this.tipo = tipo;
  }
}
