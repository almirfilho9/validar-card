function getCardType(cardNumber) {
    cardNumber = cardNumber.toString();

    const cardPatterns = [
        { type: 'Visa', pattern: /^4[0-9]{12}(?:[0-9]{3})?$/ }, // Visa: 13 or 16 digits
        { type: 'MasterCard', pattern: /^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$/ }, // MasterCard: 16 digits
        { type: 'Elo', pattern: /^(4011|4312|4389|45[0-9]{2}|50[0-9]{2}|627780|636297|636368|650[0-9]{2}|6550[0-9]|655021|655022|655023|655024|655025)/ },
        { type: 'American Express', pattern: /^3[47][0-9]{13}$/ }, // American Express: 15 digits
        { type: 'Discover', pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/ }, // Discover: 16 digits
        { type: 'Hipercard', pattern: /^(606282|3841[046]0)[0-9]{10,12}$/ }, // Hipercard: 13, 16, or 19 digits
        { type: 'Diners Club', pattern: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ }, // Diners Club: 14 digits
        { type: 'JCB', pattern: /^(?:2131|1800|35\d{3})\d{11}$/ }, // JCB: 15 or 16 digits
        { type: 'UnionPay', pattern: /^(62[0-9]{14,17})$/ }, // UnionPay: 16 to 19 digits
        { type: 'enRoute', pattern: /^(2014|2149)\d{11}$/ }, // enRoute: 15 digits
        { type: 'Voyager', pattern: /^8699[0-9]{11}$/ }, // Voyager: 15 digits
        { type: 'Aura', pattern: /^50[0-9]{14,17}$/ } // Aura: 16 to 19 digits
    ];

    for (const card of cardPatterns) {
        if (card.pattern.test(cardNumber)) {
            return card.type;
        }
    }

    return 'Unknown';
}

// Example usage
const cardNumber = '4929896262882351'; // Visa 16 digits
console.log(getCardType(cardNumber));  // Output: Visa