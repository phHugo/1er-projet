import { User } from './user';
import { UserService } from './userService';

export class UserController {

    constructor(private userService: UserService) {}

    add(username: string): User {

        // Vérification si le nom d'utilisateur est vide
        if (!username) {
            throw new Error("Le nom d'utilisateur ne peut pas être vide.");
        }

        return this.userService.add(username);
    }

    getById(id: number): User | null {
        
        // Vérification si l'ID est un nombre décimal
        if (!Number.isInteger(id)) {
            throw new Error("L'ID doit être un nombre entier.");
        }

        // Vérification si l'ID est négatif
        if (id < 0) {
            throw new Error("L'ID ne peut pas être négatif.");
        }

        return this.userService.getById(id);
    }
}