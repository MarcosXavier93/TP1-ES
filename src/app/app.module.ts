import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LoginComponent } from './login/login.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { VerificaAptidaoComponent } from './verifica-aptidao/verifica-aptidao.component';
import { CadastroTreinoComponent } from './cadastro-treino/cadastro-treino.component';
import { RealizaExameAptidaoComponent } from './realiza-exame-aptidao/realiza-exame-aptidao.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    LoginComponent,
    MatriculaComponent,
    VerificaAptidaoComponent,
    CadastroTreinoComponent,
    RealizaExameAptidaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
