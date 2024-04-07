import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private dataBaseStore: AngularFirestore)  { }

  //buscar todos os usuários
  getAllUsers(){
    return this.dataBaseStore.collection('users', user => user.orderBy('name'))
    .valueChanges({idField: 'firebaseid'}) as Observable<any[]>
  }

  // Salvar usuários
  addUser(users: any){
    return this.dataBaseStore.collection('users').add(users);
  }

  //Atualizar usuários
  update(userId: string, user: any){
    return this.dataBaseStore.collection('users').doc(userId).update(user);
  }

  //Deletar usuário
  deleteUser(userId: any){
    return this.dataBaseStore.collection('users').doc(userId).delete();
  }

}
