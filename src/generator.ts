import { firstNames, lastNames } from "./names";

const crypto = require('node:crypto').webcrypto;

interface rndNumber {
    min: number; 
    max: number; 
    total: number;
}
export const randonNumber = (options: rndNumber) => {

    const array = crypto.getRandomValues(new Uint8Array(1000));

    const tempResult = array.filter((x: number) => x >= options.min && x <= options.max);

    const result = tempResult.slice(0, options.total) as number[];

    return result;
};

export const getFirstName = () => {
    const index = randonNumber({min: 0, max: firstNames.length, total: 1});

    return firstNames[index[0]];
};

export const getLastName = () => {
    const index = randonNumber({min: 0, max: lastNames.length, total: 1});

    return firstNames[index[0]];
};

export const getPhoneNumber = (formattted: boolean = false) => {
    const digits = randonNumber({min: 0, max: 9, total: 10});

    if (digits[0] === 0 || digits[0] === 1) {
        const retry = randonNumber({min: 1, max: 9, total: 1});
        digits[0] = retry[0];
    }

    
    return (!formattted) ?
     `${digits[0]}${digits[1]}${digits[2]}${digits[3]}${digits[4]}${digits[5]}${digits[6]}${digits[7]}${digits[8]}${digits[9]}` :
     `(${digits[0]}${digits[1]}${digits[2]}) ${digits[3]}${digits[4]}${digits[5]}-${digits[6]}${digits[7]}${digits[8]}${digits[9]}`;
};

export const getEmail = (firstName: string, lastName: string, domain: string = 'local.priv') => {
    return `${firstName}.${lastName}@${domain}`;
};

export const getProfile = (phoneNumberFormatted: boolean = false, domain: string = 'local.priv') => {

    const firstName = getFirstName();
    const lastName = getLastName();
    const phone = getPhoneNumber(phoneNumberFormatted);
    const email = getEmail(firstName, lastName, domain);

    return {
        firstName,
        lastName,
        phone,
        email,
        fullName: `${firstName} ${lastName}`
    };
};