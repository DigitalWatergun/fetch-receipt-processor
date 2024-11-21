const validateReceipt = (receipt) => {
    if (!receipt || Object.keys(receipt).length === 0) {
        return {
            isValid: false,
            message: 'The receipt object is empty'
        };
    }

    const requiredFields = ['retailer', 'purchaseDate', 'purchaseTime', 'items', 'total'];
    const patterns = {
        retailer: /^[\w\s\-&]+$/,
        date: /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
        time: /^([01]\d|2[0-3]):([0-5]\d)$/, // HH:mm (24-hour format)
        total: /^\d+\.\d{2}$/, // Decimal with 2 places
        // eslint-disable-next-line no-useless-escape
        itemDescription: /^[\w\s\-]+$/,
        itemPrice: /^\d+\.\d{2}$/
    };

    for (const field of requiredFields) {
        if (!receipt[field]) {
            return {
                isValid: false,
                message: `The receipt is invalid. Missing required field: ${field}`
            };
        }
    }

    if (!patterns.retailer.test(receipt.retailer)) {
        return {
            isValid: false,
            message: 'The receipt is invalid. Invalid retailer format. Allowed: letters, numbers, spaces, hyphens, and ampersands.'
        };
    }

    if (!patterns.date.test(receipt.purchaseDate)) {
        return {
            isValid: false,
            message: 'The receipt is invalid. Invalid purchaseDate format. Expected format: YYYY-MM-DD.'
        };
    }

    if (!patterns.time.test(receipt.purchaseTime)) {
        return {
            isValid: false,
            message: 'The receipt is invalid. Invalid purchaseTime format. Expected format: HH:mm (24-hour).'
        };
    }

    if (!patterns.total.test(receipt.total)) {
        return {
            isValid: false,
            message: 'The receipt is invalid. Invalid total format. Expected a decimal with 2 places, e.g., "6.49".'
        };
    }

    if (!Array.isArray(receipt.items) || receipt.items.length < 1) {
        return {
            isValid: false,
            message: 'The receipt is invalid. The "items" field must be a non-empty array.'
        };
    }

    for (const [index, item] of receipt.items.entries()) {
        if (!item.shortDescription || !item.price) {
            return {
                isValid: false,
                message: `The receipt is invalid. Item at index ${index} is missing required fields: shortDescription or price.`
            };
        }

        if (!patterns.itemDescription.test(item.shortDescription)) {
            return {
                isValid: false,
                message: `The receipt is invalid. Invalid shortDescription format for item at index ${index}. Allowed: letters, numbers, spaces, and hyphens.`
            };
        }

        if (!patterns.itemPrice.test(item.price)) {
            return {
                isValid: false,
                message: `The receipt is invalid. Invalid price format for item at index ${index}. Expected a decimal with 2 places, e.g., "6.49".`
            };
        }
    }

    return {
        isValid: true,
        message: 'Receipt is valid'
    };
};

export { validateReceipt };
