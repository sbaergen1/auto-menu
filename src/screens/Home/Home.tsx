import { DayOfWeek, Difficulty, Protein } from '@common/enums';
import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DateSelection } from './components/DateSelection';
import { useDispatch, useSelector } from 'react-redux';
import { addDifficulty, addProtein, getDays, toggleDay, selectAllDays, selectAllWeekdays, selectAllWeekends } from '@redux/features/days/daysSlice';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { Screens } from '@navigation/Screens';
import { Button } from '@components/Button';


export function Home() {
    const navigation = useNavigation();
    const selectedDays = useSelector(getDays);
    const dispatch = useDispatch();

    const getContinueDisabled = () => {
        const dayValues = Object.values(selectedDays);
        if (dayValues.length === 0) {
            return true;
        }
        return dayValues.some((d) => d.difficulty === undefined || d.protein === undefined);

    }

    const onAllSelected = () => {
        dispatch(selectAllDays());
    }

    const onWeekdaysSelected = () => {
        dispatch(selectAllWeekdays());
    }

    const onWeekendSelected = () => {
        dispatch(selectAllWeekends());
    }

    const onNext = () => {
        navigation.navigate(Screens.MealSelection)
    }

    const renderDay = ({ item }: { item: DayOfWeek }) => {
        const isSelected = item in selectedDays;

        const onDateSelected = () => {
            dispatch(toggleDay(item));
        }

        const onDifficultySelected = (difficulty: Difficulty) => {
            dispatch(addDifficulty({ day: item, difficulty }));
        }

        const onProteinSelected = (protein: Protein) => {
            dispatch(addProtein({ day: item, protein }));
        }

        return <DateSelection
            day={item}
            difficulty={selectedDays[item]?.difficulty}
            protein={selectedDays[item]?.protein}
            isSelected={isSelected}
            onSelected={onDateSelected}
            onDifficultySelected={onDifficultySelected}
            onProteinSelected={onProteinSelected}
        />
    }

    return <View style={styles.container}>
        <Text>Select Days you want to cook</Text>
        <View style={styles.quickSelectRow}>
            <TouchableOpacity style={styles.quickSelectButton} onPress={onAllSelected}>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickSelectButton} onPress={onWeekdaysSelected}>
                <Text>Weekdays</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickSelectButton} onPress={onWeekendSelected}>
                <Text>Weekends</Text>
            </TouchableOpacity>
        </View>
        <FlashList
            data={[DayOfWeek.Sunday, DayOfWeek.Monday, DayOfWeek.Tuesday, DayOfWeek.Wednesday, DayOfWeek.Thursday, DayOfWeek.Friday, DayOfWeek.Saturday]}
            renderItem={renderDay}
        />
        <Button onPress={onNext} style={styles.continueButton} disabled={getContinueDisabled()} text="Continue" />
    </View>
}