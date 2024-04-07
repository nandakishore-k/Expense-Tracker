import { HttpClient } from '@angular/common/http';
import { ApplicationConfig, Component, importProvidersFrom, inject } from '@angular/core';
import { RouterLink, RouterOutlet, provideRouter } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})





export class AppComponent {

  http = inject(HttpClient);

  logout(): void{
    console.log('logout');
  }
  title = 'expense-tracker';
}


function provideAuth(arg0: () => any): import("@angular/core").ImportProvidersSource {
  throw new Error('Function not implemented.');
}

function getAuth(): any {
  throw new Error('Function not implemented.');
}

