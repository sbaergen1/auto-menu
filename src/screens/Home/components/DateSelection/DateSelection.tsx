import React from 'react';
import { DayOfWeek, Difficulty, Protein } from '@common/enums';
import { TouchableOpacity, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from './styles';
import { enumToDropdownArray } from '@common/helpers';

interface IDateSelection {
    day: DayOfWeek;
    protein?: Protein;
    difficulty?: Difficulty;
    isSelected: boolean;
    onSelected: () => void;
    onDifficultySelected: (difficulty: Difficulty) => void;
    onProteinSelected: (protein: Protein) => void;
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function DateSelection(props: IDateSelection) {
    const { day, difficulty, protein, isSelected, onSelected, onDifficultySelected, onProteinSelected } = props;

    let date = new Date();
    const currentDate = date.getDate();
    const currentDay = date.getDay();
    const dayIndex = weekday.indexOf(day);
    let numToMove = 0;
    if (dayIndex < currentDay) {
        numToMove = 7 - currentDay + dayIndex;
    } else if (dayIndex > currentDay) {
        numToMove = dayIndex - currentDay;
    }

    if (numToMove > 0) {
        date.setDate(date.getDate() + numToMove);
    }


    const difficultyData = enumToDropdownArray(Difficulty);
    const proteinData = enumToDropdownArray(Protein);
    const initialDifficulty = difficultyData.find((d) => d.value === difficulty);
    const initialProtein = proteinData.find((p) => p.value === protein);
    const month = date.toLocaleString('default', { month: 'short' });

    if (isSelected) {
        return <TouchableOpacity style={[styles.common, styles.selected]} onPress={onSelected}>
            <View style={styles.dayRow}>
                <View style={styles.dayTextSection}>
                    <Text style={styles.dayText}>{day}</Text>
                    {numToMove === 0
                        ? <View style={styles.todayBadge}>
                            <Text style={styles.todayText}>TODAY</Text>
                        </View>
                        : null
                    }
                </View>
                <Text style={styles.dateText}>{`${month} ${date.getDate()}`}</Text>
            </View>
            <View style={styles.dropdownRow}>
                <Dropdown
                    style={styles.addFlex}
                    data={difficultyData}
                    value={initialDifficulty}
                    placeholder="Select Difficulty"
                    labelField="label"
                    valueField="value"
                    onChange={s => onDifficultySelected(s.value as Difficulty)}
                />
                <Dropdown
                    style={[styles.addFlex, styles.addPaddingLeft]}
                    data={proteinData}
                    value={initialProtein}
                    placeholder="Select Protein"
                    labelField="label"
                    valueField="value"
                    onChange={s => onProteinSelected(s.value as Protein)}
                />
            </View>
        </TouchableOpacity>
    }
    return <TouchableOpacity style={[styles.common, styles.unselected]} onPress={onSelected}>
        <View style={styles.dayRow}>
            <View style={styles.dayTextSection}>
                <Text style={styles.dayText}>{day}</Text>
                {numToMove === 0
                    ? <View style={styles.todayBadge}>
                        <Text style={styles.todayText}>TODAY</Text>
                    </View>
                    : null
                }
            </View>
            <Text style={styles.dateText}>{`${month} ${date.getDate()}`}</Text>
        </View>
    </TouchableOpacity>
}