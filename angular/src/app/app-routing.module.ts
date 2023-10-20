import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonsterreactiveformComponent } from './monsterreactiveform/monsterreactiveform.component';

const routes: Routes = [
  { path: 'monsterreactive', component: MonsterreactiveformComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
