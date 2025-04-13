function Searchingstrings(str, sub, start) {
    return {
        first: str.indexOf(sub),
        last: str.lastIndexOf(sub),
        firstFrom: str.indexOf(sub, start),
        lastFrom: str.lastIndexOf(sub, start)
    };
}