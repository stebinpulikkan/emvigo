import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './pages/shared/shared.module';
import { LoginService } from './services/login.service';
import { productService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule, 
    SharedModule
     ],
  providers: [LoginService,
    productService],
  bootstrap: [AppComponent]
})
export class AppModule { }
