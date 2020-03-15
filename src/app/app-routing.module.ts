import { CadastroTreinoComponent } from './cadastro-treino/cadastro-treino.component';
import { VerificaAptidaoComponent } from './verifica-aptidao/verifica-aptidao.component';
import { RealizaExameAptidaoComponent } from './realiza-exame-aptidao/realiza-exame-aptidao.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Matricula', component: MatriculaComponent },
  { path: 'Realiza_Exame_Aptidao', component: RealizaExameAptidaoComponent },
  { path: 'Verifica_Aptidao', component: VerificaAptidaoComponent },
  { path: 'Cadastro_Treino', component: CadastroTreinoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
