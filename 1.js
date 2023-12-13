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

function isObject(target) {
    return typeof target === 'object' && target !== null;
}

function tab(number) {
    return "    ".repeat(number);
}

function format(obj) {
    function formatValue(value, indentLevel) {
        if (!isObject(value)) {
            return String(value);
        } else if (Array.isArray(value)) {
            const el = value.map(v => formatValue(v, indentLevel+1));
            const arrString = el.join(`,\n${tab(indentLevel+1)}`)
            return  `[\n${tab(indentLevel+1)}${arrString}\n${tab(indentLevel)}]`
        } else {
            const keys = Object.keys(value);
            const keyString = keys.map(key => {
                const v = formatValue(value[key], indentLevel + 1);
                return `${tab(indentLevel + 1)}"${key}": ${v}`;
            })

            return `{\n${keyString.join(',\n')}\n${tab(indentLevel)}}`
        }
    }

    return formatValue(obj, 0);
}

// console.log(JSON.stringify(object))
console.log(format(object))
