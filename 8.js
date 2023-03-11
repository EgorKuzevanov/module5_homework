let WindowsVersions = new Map([
    ["Windows XP", '2001 год'],
    ["Windows Vista", '2007 год'],
    ["Windows 7", '2009 год'],
    ["Windows 8", '2012 год'],
    ["Windows 8.1", '2013 год'],
    ["Windows 10", '2015 год'],
    ["Windows 11", '2021 год'],
]);

for (let [k, v] of WindowsVersions) {
    console.log('Ключ — ' + k + ', значение — ' + v);
}
