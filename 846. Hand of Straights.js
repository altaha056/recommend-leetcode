var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;
  const count = new Map();
  for (let card of hand) {
    count.set(card, (count.get(card) || 0) + 1);
  }
  const uniqueCards = Array.from(count.keys()).sort((a, b) => a - b);
  for (let card of uniqueCards) {
    const freq = count.get(card);
    if (freq > 0) {
      for (let i = 0; i < groupSize; i++) {
        const currentCard = card + i;

        if ((count.get(currentCard) || 0) < freq) {
          return false;
        }
        count.set(currentCard, count.get(currentCard) - freq);
      }
    }
  }
  return true;
};

let hand = [
  9, 13, 15, 23, 22, 25, 4, 4, 29, 15, 8, 23, 12, 19, 24, 17, 18, 11, 22, 24,
  17, 17, 10, 23, 21, 18, 14, 18, 7, 6, 3, 6, 19, 11, 16, 11, 12, 13, 8, 26, 17,
  20, 13, 19, 22, 21, 27, 9, 20, 15, 20, 27, 8, 13, 25, 23, 22, 15, 9, 14, 20,
  10, 6, 5, 14, 12, 7, 16, 21, 18, 21, 24, 23, 10, 21, 16, 18, 16, 18, 5, 20,
  19, 20, 10, 14, 26, 2, 9, 19, 12, 28, 17, 5, 7, 25, 22, 16, 17, 21, 11,
];
let groupSize = 10;
console.log(isNStraightHand(hand, groupSize));
