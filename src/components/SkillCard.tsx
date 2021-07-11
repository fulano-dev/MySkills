import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity style={styles.buttonSkill}>
            <Text
                style={styles.textSkill}
                {...rest}
            >
                {skill}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 50,
        padding: 15,
        alignItems: 'center',
        marginVertical: 10
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold'
    }

})