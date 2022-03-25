export default interface BlogPost {
  id?: number;
  titulo: string;
  autor: string;
  categoria: string;
  criacao?: Date;
};