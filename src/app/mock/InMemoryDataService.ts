import { InMemoryDbService } from "angular-in-memory-web-api";
import { Observable } from "rxjs";
import { Movie } from "../models/movie";
import { User } from "../models/user";


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const movies: Movie[] = [
            {
                title: 'La tortue rouge',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTtCcTdyVoD0KC8aX86C7EKv7CEe3T1tA7xBcndrHUOUNS9R8_7',
                director: 'Michael Dudok',
                duration: 80,
                year: 2016,
                category: 'Revoir'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            },
            {
                title: 'Le vent se lève',
                img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSaAq3QS0nDftOTI8YZ5d5YpRzXE2pv0eXj6I52yuSm0LaUhXf3',
                director: 'Michael Dudok',
                duration: 120,
                year: 2013,
                category: 'Drames'
            }
        ];

        const categories: string[] = [
            'Revoir',
            'Drames'
        ];
        const users: User[] = [{
          login: "test@test",
          password: "333"
        }]
        return { movies, categories, users };
    }
}
