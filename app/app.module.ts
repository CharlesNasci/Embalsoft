import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './guards/auth.guard';
import { TokensInterceptor } from './interceptor/tokens.interceptor';
import { InterfaceModule } from './interface/interface.module';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    InterfaceModule,
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokensInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
