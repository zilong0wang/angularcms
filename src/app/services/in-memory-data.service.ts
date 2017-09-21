import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pages = [
        {
            id: 0,
            name: 'Example Page',
            content: 'This is the default page.'
        },
        {
            id: 1,
            name: 'Another Page',
            content: 'This is another default page.'
        }
    ];
    return {pages};
  }
}