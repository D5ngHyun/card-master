import { getDatabase, ref, set, remove, onValue } from "firebase/database";

class CardRepository {
  constructor() {
    this.db = getDatabase();
  }
  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    remove(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  syncCards(userId, onUpdate) {
    const starCountRef = ref(this.db, `${userId}/cards`);

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      data && onUpdate(data);
    });

    return () => ref.off();
  }
}

export default CardRepository;
