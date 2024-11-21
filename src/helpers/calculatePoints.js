const calculatePoints = (receipt) => {
    let points = 0;

    // One point for every alphanumeric character in the retailer name
    const retailerNamePoints = receipt.retailer.replace(/[^a-zA-Z0-9]/g, '').length;
    points += retailerNamePoints;

    // 50 points if the total is a round dollar amount with no cents
    const total = parseFloat(receipt.total);
    if (total % 1 === 0) {
        points += 50;
    }

    // 25 points if the total is a multiple of 0.25
    if (total % 0.25 === 0) {
        points += 25;
    }

    // 5 points for every two items on the receipt
    const itemPairs = Math.floor(receipt.items.length / 2);
    points += itemPairs * 5;

    // Points based on item description length
    for (const item of receipt.items) {
        const descriptionLength = item.shortDescription.trim().length;
        if (descriptionLength % 3 === 0) {
            const itemPrice = parseFloat(item.price);
            const itemPoints = Math.ceil(itemPrice * 0.2);
            points += itemPoints;
        }
    }

    // 6 points if the day in the purchase date is odd
    const day = parseInt(receipt.purchaseDate.split('-')[2], 10);
    if (day % 2 !== 0) {
        points += 6;
    }

    // 10 points if the time of purchase is after 2:00pm and before 4:00pm
    const [hour, minute] = receipt.purchaseTime.split(':').map(Number);
    if (hour === 14 || (hour === 15 && minute === 0)) {
        points += 10;
    }

    return points;
};

export { calculatePoints };
