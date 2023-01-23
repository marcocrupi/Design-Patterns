// Il Singleton pattern è un pattern di creazione che garantisce che una classe
// abbia una sola istanza e fornisce un punto di accesso globale a essa.
// In altre parole, assicura che una classe abbia solo una istanza e fornisce un modo per accedervi.

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
  }
}

export const counterInstance = new Counter();

// Possiamo cancellare anche la parte superiore e creare un object literal:
// export const counterInstance = {
//   count: 0,
//   increment() {
//     this.count++;
//   },
// };
