import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const btn = document.getElementById('menu-btn') as HTMLButtonElement;
    const nav = document.getElementById('menu') as HTMLElement;
    
    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    });
  }
}
