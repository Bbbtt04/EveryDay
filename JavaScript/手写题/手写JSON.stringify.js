const object =
    {
        a: 1,
        b: [
            2,
            3,
            {
                c: 4
            }
        ],
        d: {
            e: 5,
            f: {
                g: '6'
            }
        }
    }

function tab(number) {
    return '    '.repeat(number);
}

function isObject(target) {
    return typeof target === 'object' && target !== null;
}

function format(obj, indent = 0) {
    if (!isObject(obj)) {
        return String(obj);
    } else if (Array.isArray(obj)) {
        const el = obj.map(v => format(v,indent + 1));
        const arrString = el.join(`,\n${tab(indent+1)}`);

        return `[\n${tab(indent+1)}${arrString}\n${tab(indent)}]`
    } else {
        const keys = Object.keys(obj);
        const valuesString = keys.map(key => {
            const value = format(obj[key], indent + 1);
            return `${tab(indent + 1)}"${key}": ${value}`;
        })

        return `{\n${valuesString.join(',\n')}\n${tab(indent)}}`
    }
}

console.log(format(object))
