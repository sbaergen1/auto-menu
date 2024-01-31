export interface DropdownType<T> {
    value: T;
    label: string;
}

export function enumToDropdownArray<T>(inputEnum: { [s: string]: T; }): DropdownType<T>[] {
    const outputArray = [] as DropdownType<T>[];
    Object.values(inputEnum).forEach(i => {
        if (!outputArray.find((a => a.value === i || a.label === i))) {
            if (typeof i === 'string') {
                outputArray.push({
                    value: inputEnum[i] as T,
                    label: i
                })
            }
        }
    });
    return outputArray;
}