import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
    id: string;
    name: string;
    date?: Date;
}
export function Home() {

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SkillData[]>([]);
    const [gretting, setGretting] = useState('');

    function handleAddNewSkill() {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }

        setMySkills(oldState => [...oldState, data]);
    }

    const handleRemoveSkill = (id: string) => {
        setMySkills(oldState => oldState.filter(
            skill => skill.id != id
        ))

    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        currentHour < 12 ? setGretting('Good Morning')
            : currentHour >= 12 && currentHour < 18 ? setGretting('Good Afternoon')
                : setGretting("Good Night")
    }, [mySkills])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, João</Text>

            <Text style={styles.gretting}>{gretting}</Text>

            <TextInput
                style={styles.input}
                placeholder="New Skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill} />

            <Button onPress={handleAddNewSkill} title="Add " />


            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList
                data={mySkills}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SkillCard
                        skill={item.name}
                        onPress={() => handleRemoveSkill(item.id)} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 21,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1F1e25',
        color: '#FFF',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7,
    },
    gretting: {
        color: '#fff',
    }

})