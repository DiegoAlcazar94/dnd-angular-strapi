import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'dnd-angular-app';
  characters: any[] = [];

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe({
      next: (response) => {
        this.characters = response.data;
        console.log('Personajes cargados:', this.characters);
      },
      error: (err) => {
        console.error('Error al conectar con Strapi:', err);
      }
    });
  }
}