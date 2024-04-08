
const API = 'https://currency-exchange.p.rapidapi.com/listquotes';
const API2 = 'https://currency-exchange.p.rapidapi.com/exchange';

export const list = async () => {
    const res = await fetch(API, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6630c785bmsh8be14c3dd908e94p1e62dbjsn204e861748ae',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }})
    return await res.json();
}

export const convert = async (from, to, q) => {
    //console.log('result ' + q, from, to);
    
    const url = `${API2}?from=${from}&to=${to}&q=${q}`;
    //console.log(url);
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd6630c785bmsh8be14c3dd908e94p1e62dbjsn204e861748ae',
            'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
    });
    return await res.json();
}
