import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'    
})
export class CartService {
    private team: any[] = [];

    constructor() { }

    getTeam(){
        return this.team;
    }

    addToTeam(character: any){
        const exists = this.team.find(c => c.id === character.id);
        if(!exists){
            this.team.push(character);
        }
    }

    removeFromTeam(characterId: number){
        this.team = this.team.filter(c => c.id !== characterId);
    }
    clearTeam(){
        this.team = [];
        return this.team;
    }
}
